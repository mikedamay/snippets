## LINQ

Happy to help.

I can see that in your solution to high-scores (which is a much more straightforward case for the LINQ approach) that you were using LINQ successfully. 

Were you comfortable on how methods like `OrderByDescending()` and `Take()` fitted in and worked?

Or were you more interested in knowing how LINQ worked with "hamming" in particular?

What I tell you depends somewhat on how you like to learn.

2.

I think experience is key in this case.

You need to know that `string` implements `IEnumerable` which means many LINQ methods work with it.

One reason this is not a straightforward LINQ problem (as HighScores) was is that there are two sequences to handle.  Have a look at `IEnumerable.Zip()` and see if it takes you any further.

You may see other possibilities as you think about the problem and its two sequences, in which case have a go with those.


IReadOnlyDictionary in nucleotide count.

If you want to do it, it is simply
```
public static IReadOnlyDictionary<char, int> Count(string sequence)
```
No other code changes.

It's just a hint to the maintainer that as far as you are concerned the dictionary is fully formed.

Changing the signature in the way I described still allows the caller to downcast the result to a writable dictionary.  You could fix that by wrapping the original dictionary in a `ReadOnlyDictionary`.

Your choice:
* Dictionary
* IReadOnlyDictionary interface
* ReadOnlyDictionary wrapper

depends on what you know about how the object will be used and what you want to communicate to the user.  I like to use the type system to express as much as possible about the nature of an object.  I also like things to be as immutable as possible.  At the same time I don't care to imagine that my colleagues / future maintainer will cast away a readonly property.

Happy to continue the discussion 

---------------------
## In praise of LINQ

Hamming n8water
https://exercism.io/mentor/solutions/241cbdcc829840ee90e4a996d5480a07?iteration_idx=2

I have seriously used LINQ for about 18 months and complex solutions still do take longer to grasp.  The same goes for the functional style in general and recursion in particular.

I don't think the pay off of LINQ is readability or even ease of reasoning.  I think it's dependability.  I think it shares this quality with strongly typed functional languages like Haskell and Elm.  You see it said of Elm that if it compiles then it probably behaves as you expect.  I have used Elm a bit and definitely found it to be true.

LINQ may take longer to understand or write but once you have your code it is far more likely to behave as you intend and maintainers are far less likely to make mistakes if they modify or rely on it.

I think it is worth sticking with.  It, and a functional style in general, are certainly in fashion.

## Distaste for globals + giving multiple cases

Review Points:

Good solution

Discussion Points:

I saw a little idiom the other day that I liked
```
OrderBy(_ => _)
```
It's there for you if it appeals

I don't agree about use of global on principle.  The principle being that your class immediately becomes non-thread safe and more difficult to reason about for a maintainer with negligible advantage to the code.  Perhaps you had more methods previously.

Very much in the realm of personal preference: for a problem like this with multiple disparate choices I favour a structure that spells out the choices individually.  I did this on the Java track and went for a dictionary of enum->lambda.  I have not completed it in C#.

More than happy to continue the debate.

-------------------

## iteration vs. recursion
Iteration would generally be faster than recursion except if the language/environment supports tail-call optimisation and your code takes advantage of it.  This of course would also overcome the stack overflow problem.

In the case of .NET I think that F# may support tail-call optimisation and C# does not but I cannot refer to an authoritative statement on this.

----------------------
## static:

My comments are motivated, in this case, by the wish to make life easier for a future maintainer of the code.  Obviously, there are other considerations such as performance or initial coding effort but the points below do not affect those.

Multi-threading: one of the main reasons to avoid static, writeable (mutating) fields is that they render the class non-thread-safe.  Say a maintainer introduces multi-threading.  Imagine 2 threads both executing `Steps()` simultaneously. It is likely that both threads would affect the `_steps` field and they would both end up with an inflated (wrong) number of steps.

Threading is a very practical point and probably a winning argument on its own. But a more subtle, and I think, important point is that the inclusion of statics makes the code more difficult to reason about.  Your initial submission shows a classic case of this where you omitted to clear the field each time `Steps()` is called.

Because the power and scope of a stack (non-field) variable is so much less than that of even a private field it is far easier to understand/internalise what its role is without giving it a second look.  This is even more the case for return values particularly from private methods.

Of course, in this exercise, a maintainer is unlikely to be caught out.  The code is short and its current usage is well defined.  But imagine it is part of 20,000 lines of code it would be good to know (even without finding it in the code base) that it has been written as safely as possible with the maintainer in mind.

When is it appropriate to use it?  

It is appropriate to use writable static fields when you assess the relative claims of coding effort, readability, likelihood of threading being introduced, exposure to a wider code base (i.e. by number of references) and decide that the reasons I put forward above are not the most important.

An example might be a small library which is protected from multiple thread executions through its API, where perhaps you want some instrumentation on the code to show how many times a method is called.

----------------------
## Leap and compressed boolean logic

Looks good.

You can simplify this to:
```
year % 400 == 0 || year % 4 == 0 && year % 100 != 0
```
if the year is divisible by 400 then it must be divisible by 4 so you get:
```
       4(1)      400      4(2)     !100
1969 - false && false || false && true  == false
2012 - true && false   || true && true  == true
1900 - true && false   || true && false == false
2000 - true && true    || true && false == true
```
You can see that the first occurrence of divisble-by-4 is always true if disible-by-400 is true and it doesn't matter what it is when divisble-by-400 is false because `&&` means that false wins.

>  I come across a lot of these condensed return statements at work and normally spend 20 mins interpreting them.

You make a valid point.  However a reasonable proportion of your peers will expect you to use the compressed form.  In order to be able to fit into coding shops of all types you should try to get comfortable with this approach.  Find a good tutorial on boolean logic and pick at it until you have internalised it.

----------------
## Readability of Leap Compressed Expression

This is a tricky point to address. I suspect experienced csharpers like me would call your final iteration "idiomatic".  It is quicker for us to read but does it take longer to internalise / grok.  I have seen about 200 solutions to Leap so I have long since ceased reacting to the code in any useful way.  I have a sneaking suspicion that we like to see the compressed expression which characterises your final solution because it shows that you belong to the "club".  You are one of us.  You are in control of the language and know its ways.

I saw a solution this morning which I think I will come to favour:
```
return year % 4 == 0 && !(year % 100 == 0 && !year % 400 == 0);
```

Any thoughts? 


-----
## Out Of Memory

That's looking much better.

You might want to consider what happens when you have created 26*26*10*10*10 robots.  It may not matter too much depending on the context for your program but the robots are coming!

`OutOfMemoryException` takes me back to my C/C++ days.  In managed environments like C# and Java you are far less likely to see this kind of exception being caught.

I wonder why we don't care so much.  Obviously you can still run out of memory.

1. Perhaps, since managed code has been introduced in an age when virtual memory was plentiful the problem of memory problems became less pressing and therefore the practice was never introduced (despite our C/C++ roots).
2. Where an operation comprises multiple allocations, say an array has to be cloned a couple of times, it is not clear, if the out-of-memory occurs part way through how the work-in-progress could be quickly cleared up in the absence of a `delete` function.
3. You might think that say are allocating memory for a large image that you could test for available memory first.  There is no obvious call that jumps out to support this.  I suppose there is simply too much going on with the garbage collector etc. to enable a foolproof call to be provided.
4. .NET code is not usually found in situations such as OS or embedded development where you are likely to run out of memory.
5. To be honest we just behave like good citizens and hope for the best.

---------------
## Advantages of limited public APIs
You have public methods which are not required by the exercise.  My very strong opinion, and I think it is conventional wisdom, is that public APIs should be as limited as is consistent with the required functionality.  Where ever possible make methods, enuums, fields, properties and any other members of a class private.

Why not help out users of a class by providing as much information as possible?
1. It limits how the extent to which the class maintainer can change the implementation.  In the case of Circular Buffer if you exposed any of your private fields then you could not switch to a queue implementation if you decided you needed to at some stage.
2. It confuses users of the class or at least requires them to think more than necessary about its purpose and behaviour. To put it different way it adds noise.
3. It increases the testing and documentation burden.
4. It is extra baggage for maintainers.  Let us say that as part of its diagnostics Circular Buffer maintained a throughput rate.  After some years a maintainer realises that the the diagnostic process is depressing performance so they remove the diagnostics but keep the throughput rate which is a lightweight calculation.  Forever after they will need to maintain, document and test that feature and if the class is part of a library they will even know if it is being used. 

Of course, anything can and should be made public (although the use of public fields is discouraged) if that's what enables the class to be used as intended.  From there we move on to a discussion of the advantages of immutable classes.

-------------------
## In Praise of Minimal Coding
The fashion these days, encouraged by agile practices such as Test Driven Development and Minimum Viable Product is to code closely to the spec and leave enhancements to be refactored in when requirements change.

By including multiple strands here you have introduced a testing and maintenance requirement for functionality that may never be needed and is not needed at present.

-------------------
## GetHashCode()

A hash code is typically based upon the important values comprising the object and must obey the rule that if `Equals()` returns true then `GetHashCode()` must return the same value for the two instances.  The reverse is not the case.  Instances that have the same hash code will not necessarily be equal.  The hash code is used in Dictionary and HashSet lookups.

The intention is that an object should map to an integer.  Presumably collections can build an array for fast lookup based on the range of integers (or a B-tree or something like that).  Too few possible hash codes and the lookups will be inefficient.  Having found the "bucket" to which an object belongs the system will have to search among all the objects sharing that hash code for the one that is exactly equal.  Too many possible hash codes then there will be an profligate use of memory.

In the case of clock the number of minutes (hours * 60 + minutes) would seem to be a good number - we know there will be exactly 1440 hash codes and there will be exactly one clock per hash code.

Where you want to restrict the number of possible hash codes, say your objects are equal based on an id that is an unsigned long then for reasons that I assume relate to the way that collections implement the lookup you are expected to make sure that hash codes are distributed evenly across the range.  No doubt for good mathematical reasons, prime numbers, modulus and xoring come into this in a big way.  For example, my IDE, Rider, which does not understand that hours + minutes can never be outside the range of 0 to 1439 suggests the following GetHashCode() method:
```
public override int GetHashCode()
{
    unchecked
    {
        return (hours * 397) ^ minutes;
    }
}
``` 
I have never found good practical advice on how to devise a hash code, i.e. what prime to choose, when to xor.  I rely on my IDE.

-------------
## Defensive Copy (HighScores)

I hope that the following illustrates the problem (based on your previous submission):
```
var li = new List<int>{ 1, 3, 2 };
var hs = new HighScores(li);
Console.WriteLine(hs.Latest());  // 2
//.... thousands of lines of code later
li.Add(4);
// ... in a different part of the code base
Console.WriteLine(hs.Latest());  // 4
```
The same applies to the list returned by `Scores`.

The problem here is that the change from 2 to 4 is not immediately obvious to maintainers because instead of going via a formal API the change is achieved in a rather surreptitious way.  Imagine these changes take place in a code base of thousands of lines over a period of months.

Let me know if you don't fully see the problem.  It is subtle.  If you want to follow up more authoritative references the fix (`ToList()` in our case) is known as defensive copying.

---------------
## LINQ Difficfulties (ref to GradeSchool)
LINQ

I am sorry I can't help by referring you to a good LINQ tutorial.  I think the problem is that LINQ cannot be easily internalised at its abstract level and to understand it through its implementation (which I think is the best approach) requires a fairly advanced familiarity with the rest of the language.

The following technologies are involved in LINQ:
* Extension Methods - `Enumerable.GroupBy, Enumerable.OrderBy, Enumerabiel.Select` etc.
* `IEnumerable<T>` and the relationship with foreach - `grades`
* lambdas - e.g. `x => x.grade == grade)`
* anonymous objects - `new {x.grade, x.student}`
* generic type inference - 
* Classification of methods (immediate vs. deferred), (streaming vs. non-streaming) - e.g. `Select`- deferred/streaming, `OrderBy`-deferred/non-streaming, `ToList`-immediate.  All immediate services are non-streaing.

Pick out what confuses/intrigues you from the above and we can discuss

----------------
## Expression Bodied Members
> As far as expression bodied members.. I'm not sure I really get them after reading

Don't worry.  They are the ultimate syntactic sugar.  I think your problem is that they solving some problem in a new way.  They are not.
```
int foo(int a, int b) => a + b;
```
is functionally equivalent to:
```
int foo(int a, int b)
{
    return a + b;
}
```
> It seems similar to Lambda expressions?

Expression bodied members have nothing to do with lambdas - just coincidence of syntax.

Lambdas do indeed exist in C#.  Very similar to Python I'm sure.

Feel free to show me any examples that confuse.

## Readonly Discipline
> what exactly adding "readonly" to grades list adds to the functionality of the class

The simple answer, as you surmised, is - absolutely nothing.  `readonly` makes no difference to the functionality of the class.

Why use `readonly` on private members of a class?  It comes under the heading of making the code as expressive as possible so that when a maintainer is inspecting the code they can very quickly assess how it behaves, how they can change it, how risky changes are likely to be.

Maintainers can grok code as declarative rather than having to trace through the procedures that affect it.

In the case in point the maintainer will know that they can safely take a reference to `grades` and that will not change under them.

Does it give any advantage in 27 lines of code?  Probably not.  What mistakes are a maintainer likely to make?  Is there really any doubt about how the code behaves?  NO!

Why give the `readonly` advice?  It's about discipline.  Get into the habit of making code as tightly constrained as is consistent with the circumstances and you won't forget it when it counts and you won't have to tax your brain with whether or not it counts in a particular situation.

------------------
## LINQ Implementation (with ref to Grade School)

> also, the last sentence from your comment is totally confused me :)

The following is expressed in terms which relate to LINQ over objects rather than database/entity framework.  The concepts still more or less apply to other LINQ providers but the implementation is different for them.

__Streaming vs. non-streaming methods__

This is fairly simple.  Some routines like `Select` or `Where` simply pass through one record at a time.  They don't care whether they are at the start or end or how long it will take the next record to come through.  Their great advantage over non-streaming routines is that they do not require multiple records to be buffered in memory.

Non-streaming methods are the likes of `OrderBy()` which requires all the data to be gathered in memory so ti can be sorted.  This can obviously have a major impact on memory.

Also, if you were handling data subject to time delays such as data from a socket then I think you would favour streaming over non-streaming to make a system responsive irrespective of memory usage.

__Deferred Methods__

Deferral goes to the heart of LINQ.  Because the pipelining such as `var unsortedStudents = grades.Where(x => x.grade == grade).Select(x => x.student)` simply builds a great big nested `IEnumerable` rather than executing methods against `grades` it allows you to build up the pipeline incrementally and use the composed pipeline at a later stage.  It has other advantages such as allowing precisely the same syntax to be used with other LINQ providers such as databases or entity framework where immediate execution would not be an option.  There may be other reasons - I will have to think about that.

The pipeline is executed by non-deferred methods like `ToList()` or `ToArray()` as well as by `foreach` constructs which iterate over the results of the pipeline.

__Generic Type Inference__

Have you wondered why the whole thing works without a mention of the types involved?  The same syntax applies to a collection of `int`s as to a collection of a class like `Student`.  See `IEnumerable.Cast`, `IEnumerable.OfType` and `IEnumerable.AsEnumerable` for cases where types do come into play.

The reason that you don't usually have to care about the types involved is that the compiler can almost always infer the types from the context.  It uses the type of the object on which it is an extension method and the result type from whatever lambda is executed.

Without this magic `Roster` would look like this:
```
return grades.OrderBy<Student,int>(x => x.grade).ThenBy<Student, string>(x => x.student).Select<Student, string>(g => g.student);
```


------------------
## communication skills and Approach to LINQ
Please bear in mind that just as you are practising your C# skills I am practising my communication skills so I am more than a little interested in your feedback.

Things got rather heavy with the explanation.  as I said in my comment way back the problem with LINQ is that it's difficult to internalise at the abstract level and that understanding its implementation (which was certainly necessary for me to master it) requires a fairly advanced understanding of the C# language.  I suggest you start with extension methods and work down the list in my review of your previous submission.

-----------------
## Use of Regex (with ref to Acronym)

I suspect you are referring to `string.Split` and `Regex`.  `string.Split` you should have a handle on fairly early in your study.  It's pretty simple - check it out.

`Regex` or regular expressions are a different matter.  A little bit marmite perhaps but surely designed to introduce subtle, untestable, bugs into a code base.

As an experienced csharper I did not use either of these constructs.  To me the problem is shaped as a state machine and I, like you, used a loop.

------------------
## Acronym - state machine vs. Regex / Split

I suspect you are referring to `string.Split` and `Regex`.  `string.Split` you should have a handle on fairly early in your study.  It's pretty simple - check it out.

`Regex` or regular expressions are a different matter.  A little bit marmite perhaps but surely designed to introduce subtle, untestable, bugs into a code base.

As an experienced csharper I did not use either of these constructs.  To me the problem is shaped as a state machine and I, like you, used a loop.

-------------------------
## readonly discipline (with ref to rna translation)
It's a pretty subtle point.  I am suggesting that you have `private static readonly IReadOnlyDictionary...`.

Ostensibly I'm saying that this will inform maintainers of what sort of thing this object is.  It is safe to throw around within the class, they could safely make it public if they had to.  They are guaranteed that the class is thread safe.  They can see all of this from the declaration and do not have to "wade through" the implementation.

In fact, the code is so trivial that it will make little difference to the maintainer.  However, it  is a good discipline to follow and from a mentoring stand point it emphasises that making the variable `readonly` has no effect on the writability of the dictionary.  you can still add delete or modify.

