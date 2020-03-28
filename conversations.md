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

LINQ may take longer to understand or write but once you have your code, or have taken the trouble to understand someone else's, it is far more likely to behave as you intend and maintainers are far less likely to make mistakes if they modify or rely on it.

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

-------------------------
## Array / Index Of (ref resistor-colors)
our confusion over the return value from IndexOf() is utterly justified.  What a mediocre piece of documentation that particular MSDN article is!  Incidentally make sure you use the latest documentation at [docs.microsoft.com](http://docs.microsoft.com).

Actually in the docs.microsoft.com version of the documentation the text you quote is from the overload that takes an `Array` rather than a conventional array.  Other overloads of `IndexOf()` do mention -1.  But none the less poor guidance unless the reader happens to be looking for bear traps.

The short answer is that in 99.9999% of cases the return values in a C# program is -1 and the following code would be expected in your solution:
```
var cc = Array.IndexOf(colorCodeArr, color);
return cc != -1 ? cc ? thrown new ArgumentException();
```
So why can't the docs just say that?

There is a different sort of array (an instance of the class `System.Array`) which allows the lower bound of the array to be set by the caller see [http://csharphelper.com/blog/2015/05/make-arrays-with-non-zero-lower-bounds-in-c/](http://csharphelper.com/blog/2015/05/make-arrays-with-non-zero-lower-bounds-in-c/).  It is unfortunate the example in the article is for a 2 dimensional array.

`Array`'s static methods have to operate on both traditional arrays (e.g. `new int[10]`) and instances of `Array`.

You will see from the article above that if you create an array say with the bounds 2000 to 2009 (`Array.CreateInstance(typeof(string), new int[] {10}, new int[] {2000})`) then a call to `arr.GetValue(0)` will cause an out-of-bounds exception where as a call to say `arr.GetValue(2003)` will return 0 (or whatever is subsequently stored there.  Presumable `IndexOf` returns 1999.  - I've certainly never used any of this stuff.

As far as I am aware there is no easy way to convert between instances of `Array` and conventional arrays.

Why all this nonsense?

.NET libraries support the CLR (Common Language Runtime) rather than a particular language.  One CLR language, VB.NET, had to keep faith with its ancestor Visual Basic.  In Visual Basic these non-zero bounded arrays were first class citizens and had the same form as conventional arrays.

--------------------
## Array / Cast (ref Allergies)
`Enum.GetValues()` returns you an object of type `System.Array` which implements an IEnumerable.  On the face of it you should be able to call `Where()`, `ToList()` or `ToArray()` on the collection.  This will not work as `Array` is not an `IEnumerable<T>` it is only an `IEnumerable` which LINQ does not handle by default.

The solution is to call either `Cast<T>()` or `OfType<T>()` which are provided by LINQ to convert an `IEnumerable` to an `IEnumerable<T>`.  In your case you want an `IEnumerable<Allergen>`.  You can then call `Where()` and `ToArray()` on the result of this.

`System.Array` is an object that behaves very like an `object[]` but is not quite one.  Instances are seldom used although its `Array.IndexOf()` method is popular.  It is really a hangover from early .NET - before generics.  There are a couple of places it is still useful and I will point you there if you are interested.

`System.Collections.IEnumerable` is another hangover from early .NET, before generics.  It and other members of `System.Colletions` such as `List` or `Dictionary` allow you to have collections containing elements of different types.  Like `IEnumerable<object>` although not fully compatible (as is the case here with LINQ methods).

This a lot to take in and probably more than you want to know, although I am happy to explain further.

I am well, by the way but no holidays for me.  Thank you for asking.

Alternative explanation:

The problem is that `GetValues()` returns an object of type `System.Array`.  It's an anomalous object, not like a conventional array, `object[]` (in fact it is described as the base class for arrays - but that's not very helpful).  

`System.Array` implements `IEnumerable` (which is not quite the same as `IEnumerable<object>`.  LINQ provides the method `Enumerable.Cast()` that allows you to convert from an `IEnumerable` to `IEnumerable<T>` where `T` is Allergen in your case.


--------------------
## More on Dictionary of string to enum (ref resistor-color)

The argument in favour of having strings represented (particularly within an initialised dictionary) is that it hints to the maintainer that the format of actual strings passed in is important.  They can't be any old strings.  In your solution, in the absence of such a hint, you would have to read through the entire implementation to be sure.

It is a subtle and very arguable point.  I would never raise it in a commercial code review.

In reality, I would probably start with an enum (without a dictionary) and wait for developments before switching to anything more sophisticated.

----------------------
## Three altenratives for Leap
```
return (year % 4 == 0) ? (year % 400 == 0 || year % 100 != 0) : false;
```
The more conventional solution is:
```
return year % 4 == 0 && year % 4 != 100 || year % 400 == 0;
```

Your solution may well be more readable - I've seen hundreds of these so I can't tell any more.

I think I like
```
return year % 4 == 0 && !(year % 100 == 0 && !(year % 400 == 0));
```

-------------------------
## In defence of the single line (ref Leap)

First of all, if you have considered all appropriate factors and think your solution is correct then you should stick with it.

Readability is very important.  Performance and dependability are also key but neither matters here.

So, which is more readable your multiline solution or a single line?  It all depends on who's reading it.  Most experienced csharpers would be ok with both.  They can take in the single line faster.

CSharp/.NET is moving in a functional programming direction where you have to train yourself to read those sort of expressions when they occur in LINQ pipelines etc.

Or maybe using the single line shows you belong to the "club".  Not a particularly uplifting reason for using it but there are job interviews, etc. to be considered.

-------------------------
## Use of single ampersand & (ref Leap)

Use of `&` rather than the more usual `&&` is interesting.  It is valid.  The difference between the two is that with your version `year % 100 == 0` is executed even if `year %4 == 0 is false` and with the conventional approach evaluation ceases as soon as an expression returns `false`.  `&&` like `||` is known as a short-circuiting operation.

-------------------------
## Use of Finalizer (ref Robot Name)

The finaliser (as in `~Robot`) is almost never used in day-to-day coding.  It is not guaranteed to be executed in a timely manner.  I suppose it could be used when debugging or instrumenting code when things get hairy.  

So, you may be wondering how to handle the death of a robot.  I think Robot would have to expose a method such as `Dispose()` and code using the robot would be required to call that when the robot was killed.

For certain sorts of objects such as files, streams and other objects that own external resources there is a "disposable" pattern that they use enforced with `using` construct but that would not be appropriate for this sort of value object.

----------------------------
## Alteration of Tests
I assume the tests have been run by the student unless it is obvious (from my visual inspection) that the code would not pass them. I am sure I miss cases where the student has not bothered to run tests or they fail. As far as I'm concerned that's their business.

Sometimes (but not that often) I like to run the code which I copy and paste from the submission page and that would be against the standard tests which I already have loaded in my IDE.

Not often for TwoFer! The last time I did it for TwoFer was when a student made the parameter's default value a private const of the class. I did not know you could do that. BTW I would not advocate it.

There is a link for the mentor to download your solution (as is - which I assume includes tests you have uploaded) but that does not tie into my IDE as easily and in certain cases misses some of my own tests.

----------------------------
## IEquatable interface

`IEquatable<Clock> is a marker interface.  
A marker interface is one that expects to be detected at runtime and that callers will change their internal behaviour depending on the presence or absence of the interface.  Tools and runtime can detect the interface and validate instances or use them in a particular way.

[https://stackoverflow.com/questions/1023068/what-is-the-purpose-of-a-marker-interface](https://stackoverflow.com/questions/1023068/what-is-the-purpose-of-a-marker-interface)

In our case simply remove ` : IEquatable<Clock>` from the class declaration and you will see it makes no difference at all.  Note,  the  only change to make is to include the text `: IEquatable<Clock>` in the declaration or exclude it.  Both Equals methods remain in the definitition which ever way the declaration is expressed.

So, what's it for?  If you had a list of clocks and called Contains on them then the list's behaviour would vary depending on whether IEquatable is part of the declaration or not.  If IEquatable is declared then the List.Contains method will call Clock.Equals(Clock other) directly.  If IEquatable is not part of the declaration then List.Contains will call Clock.Equals(object obj) and thereby Clock.Equals(Clock other) indirectly.

So, what's the point?  The ONLY point of including `IEquatable<Clock>` in the declaration is to allow collections like `List<Clock>` to skip the unncessary call via `Clock.Equals(object obj)`.

------------------------------
## LINQ - Imperative Equivalence (ref Perfect Number)

Where ever you have a for loop over incrementing integers you can use `Enumerable.Range()`.

Where ever you have a simple condition based around the incrementing integer you can filter with a `Where()`.

Where ever you are accumulating a total you can use `Aggregate()` 

You are doing exactly these things in `CountAlquotSum()`.

------------------------------
## Justification for Craftsmanship

You should understand that this is not about right and wrong but about choosing between alternatives to find a style that suits you and that results in maintainable code.  I don't think C# is a technically challenging language (in comparison to say Haskell, Rust, C++ or Scala) and a lot of what we do is about software craftsmanship, i.e. providing readable, dependable, performant and gotcha free code to those who have to maintain our efforts.

--------------------------------
## Is defensive copying such a good idea?  (ref High Scores))

I think that returning a readonly collection is slightly better than cloning.  A user of the class is made immediately aware (by way of an exception) of their mistake in attempting to modify the list whereas with a cloned list the change would be quietly swallowed.  It's a shame that the constructor spoils it all.

I shall change my guidance notes.

I'm also wondering in these days when "fail fast" is the watch word whether defensive copying is the right approach.  I suspect that as so often the answer is "it depends".

---------------------------------
## Maxim

The more that you correctly understand about the code you are maintaining and the quicker that you interlise it, the safer the modifications that you make.

---------------------------------
## Learning

2 Stages:
1. Mentee should be aware of available approaches
2. Mentee should be provided with mechanism and criteria for making a choice.

Possibly we could be explicit about this in the review points

-----------------------------
## Bitwise Operations (ref Allergies)

Try the [Wikipedia Article](https://en.wikipedia.org/wiki/Bitwise_operations_in_C) on bitwise operations and then put your queries about it here (in the form of comments).

## Pro's and Con's of Defensive Copying (ref HighScores)

If we did want the list changed at a high level I would contend that this is not a good API.  HighScores has all the attention and in learning about the code a maintainer would be prone to think that all changes to HighScores should be going via the HighScores interface.

A different question for me is that in avoiding one gotcha with our defensive copy to we create another in that a naive maintainer might (without inspecting the implementation of HighScores) believe that they are effecting a change to the scores at runtime when in fact their change quietly fails to affect HighScores.  If we follow a fail fast principle maybe screwing up HighScores is the lesser of two evils.  Possibly a question comparable with the number of angels on the point of a needle.  Still, I would be interested in your view.

-------------------------------
## More on Returning readonly dictionary in NucleotideCount

The comment is more to make you think about the effect of your code on maintainers and to make you think about how readonly applies to field references and collectons, not to mention what is going on with `Assert.Equals()` that would let you change `Count()`'s method signature.

My point is you could just change:
```
public static IDictionary...
```
to:
```
public static IReadOnlyDictionary...
```
It's a hint to maintainers about how you expect the dictionary to be used.  You don't expect anybody to be changing it.

The point is debatable and I am happy to discuss this further.

Note that changing the interface does not guarantee that the collection cannot be modified.  A maintainer could downcast the object returned by `Count()` back to a dictionary but, depending on circumstances, converting the returned object to a read only dictionary (as opposed to simply changing the interface, as we have here) would be overkill.

-----------------------------
## Analysis of Hamming Performance Difference (LINQ vs. non-LINQ)

> why it would be 3 times as slow using Zip

Interesting Point

This is the code I used for the comparison:
```
// non-LINQ version
int distance = 0;
for (int ii = 0; ii < s1.Length; ii++)
{
    distance += s1[ii] != s2[ii] ? 1 : 0;
}

// LINQ version
firstStrand.Zip(secondStrand, (a, b) => (a, b)).Count(p => p.Item1 != p.Item2);

// test
[Fact(Skip = "")]
public void Long_Strand()
{
    string strand = new string(Enumerable.Repeat('A', 1_000_000_000).ToArray());
    Assert.Equal(0, Hamming.Distance(strand, strand));
}
```
Some questions to think about (to which I don't have the answer):
* Does the JIT compiler get involved?  I'm thinking "no" because the method is called only once.
* Is there a lot of infrastructure around the `Zip` version?  Having a look at the IL code would probably give a better picture of what's involved.
* Is there some problem with the test or the slight variation in our `Zip` code?  You can do the comparison yourself and see what results you get.

My guess is that the diminution in speed comes from the infrastructure (code generated) to support `Zip` but optimisation is an area famous for defeating intuition.

-----------------------
## More on Defensive Copying (ref HighScores)

`ToList()` is a simple way to do a shallow copy. 

> but what do you think? If they were reference types

If the reference types were immutable then a shallow copy would be sufficient.  Yet another reason to make types immutable if possible.

If the reference types were mutable then there is a whole different discussion.  I think you would need to examine exactly what was intended to happen to the list.

>  Is this common or more of a thought exercise?

A fine question.

I first came across defensive copying in Joshua Bloch's brilliant Effective Java.  Java is famous for having a mutable Date object.  I am sure I must have done at least one defensive copy in my decade of Java web programming but I can't actually remember it or remember encountering any bugs caused by its absence.  The team I worked with were not the sort of people who laid traps for each other by quietly changing objects after having passed them to a collection or another object, the program sizes were less than 250,000 lines of code and we were forced to have mutable types by testing, frameworks and libraries so there was no point in being too precious about things.

Possibly better than a defensive copy is to think about how you would redesign the HighScores API.

I think that accepting an `IEnumerable<int>` in the constructor and returning one in `Scores()` (or possibly returning a readonly collection in `Scores`) is better than cloning.  A user of the class is made immediately aware (by way of an exception) of their mistake in attempting to modify the list whereas with a cloned list the change would be quietly swallowed.

I must change my guidance notes.

I'm also wondering in these days when "fail fast" is the watchword whether defensive copying is the right approach.  I suspect that as so often the answer is "it depends".

------------------------
## How to Approach Recursion (ref Collatz Conjecture)

> couldn't see a way to initialise and keep a count without creating a separate function

It seems that the way to approach these problems with recursion is to find a way to divide the problem up into a "current step" and "the same method applied to the remainder of the problem" (and also to find an exit condition).

The exit condition is simple - if the number is 1 then return 0.

If we say that the "current step" is to include 1 (for the current step) in the return value then "the same method applied to the remainder of the problem" would be to apply the method to the number as transformed by the collatz algorithm.

I freely admit that the above may not have given you much of an insight so feel free to come back with questions.

My technique (I am learning Haskell) is usually just to implement the function any old way that works (it has to be recursive with Haskell) and see whether that gives me inspiration.

If you find that you need two methods then you can make one a nested function of the main method which makes things look neat.

---------------------------
## IEnumerable (ref Grade School)

I have not found any good tutorials on LINQ.  Sadly I think the only way to truly get comfortable with LINQ is to understand the implementation.

These are some of my notes (they may be as unilluminating as Microsoft’s but at least you get to ask me questions):

I assume that the question is how does `IEnumerable<GradeStudent>` relate to a LINQ expression like `StudentList.Select(element => element.Student).ToArray()`.  This would transform a list such as
```
new List<GradeStudent>{ new GradeStudent(“Pedro”, 4), new GradeStudent(“Mike”, 3)}
into {“Pedro”, “Mike”}
```
`List<GradeStudent>` implements `Enumerable<GradeStudent>`.  The reason that the types involved are not mentioned in the LINQ expression is that the compiler can almost always infer the types from the context. It uses the type of the object on which it is an extension method and the result type from whatever lambda is executed.  It knows that `StudentList` is all about `GradeStudent`s.

The extension method `Select()`’s signature is as follows:
```
public static IEnumerable<TResult> Select<TSource, TResult>(  this IEnumerable<TSource> source, Func<TSource, TResult> selector)
```
It takes `StudentList` as its source plus the lambda `element => element.Student` as the second parameter.  It creates an `Enumerable<string>` which is passed to `ToArray()`.  The string in this case is the student name.

`Enumerable<T>` has a method `GetEnumerator()` which will walk along things like lists.  `ToArray()` calls `GetEnumerator()` on the implementation of `Enumerable<string>` passed by `Select()` and calls `MoveNext()` to get the first item. this in turn (because of the way `Select()` has set it up calls `MoveNext()` on `StudentList`’s enumerator.

`Select()` is only called to create an `Enumerable<string>` whose implementation hooks it up with `StudentList`s enumerator.

Please bear in mind that just as you are practising your C# skills I am practising my communication skills so I am more than a little interested in your feedback.

Things got rather heavy with the explanation. as I said in my comment way back the problem with LINQ is that it's difficult to internalise at the abstract level and that understanding its implementation (which was certainly necessary for me to master it) requires a fairly advanced understanding of the C# language. I suggest you start with extension methods and work down the list in my review of your previous submission.

## In Favour of Immutable Classes (ref Grade School)

I acknowledge that `Student`'s being modifiable has no great effect on this code but an "immutable" discipline is good as it makes life in general easy for maintainers.

* Immutable classes are automatically thread safe
* Immutable classes are more amenable to use in sets and maps.
* Immutable classes prevent the need for "defensive copying` or other counter-measures against API circumvention.
* Immutable classes are easier to work with when debugging or reasoning about code.

## In Praise of Low Level (Ref Variable Length String)

The only thing I would say (and tentatively, because I don't hold up my own solution as any sort of example) is that I don't think it helps to abstract things in the way that you have, e.g. introducing a stack and an IEnumerable.  It may (or may not) be better to keep the concepts ant the bit and byte level for this sort of low level thing.

## Choices in an Exercise (ref Grade School)

Your suggestion is a common approach.  I prefer the simpler tuple based approach but both are thoroughly acceptable. 

In a non-Exercism situation I think other factors would determine which approach you chose.  It's the fact that exercises leave us without a realistic context that necessitates an arbitrary decision.
* Performance in general, update vs. read in particular
* Part of trivial uitilty or a massive code base
* Coding standards
* known future development direction

## LINQ Tutorials
> if you could direct me to some useful learning resources

The top Google entry (for LINQ tutorials) [here](https://www.tutorialsteacher.com/linq/linq-tutorials) looks useful.  If you have queries feel free to ask me (by commenting here).

You will see there are two sets of syntax - query syntax and method syntax.  You need to be aware of both but most students on Exercism seem to use method syntax.  I certainly do.

I believe [https://www.linqpad.net/](https://www.linqpad.net/) is also a useful tool for practicing.

It's interesting.  I've been asked this question a number of times and this is the first occasion on which I founds something online that looked useful.  I must have asked a different question in the past or the site's SEO is a better match.

## Parallel Letters
> I feel like there has to be a better way to do this

For me your submission is 2 to 3 times faster than the standard LINQ approach using `GroupBy()` for the 3 anthems repeated 100,000 times as the input array.  But my tests are not very scientific.

> the method wasn't async to begin with

Surely async/await would generate pretty much the same code as you've got.  It you want the syntatic sugar you could call a private async method.  It won't make any difference to the time taken as the test won't complete without a full dictionary.

> I'm also not entirely sure where the best place for division of labor here is

I would think that to some extent this would depend on the characteristics of the data.  "abc" repeated 10,000 times is different to the 3 anthems.  I did not understand why you split the text into words when handling each text.

You don't need `ToCharArray()`.

I don't you'll find much to learn from the community solutions.  Many like me went for Linq/GroupBy. 

You'll have gathered that this is not an area of expertise for me.  It continues to look like a black art.

## Further Explanation of Resistor Color
> Could you please elaborate on it?

I make 3 separate points:
1. "ColorCode() causes ...".  Each time `ColorCode` is called the entire Colors array is reconstructed.  You should be aware that this is not efficient.
2. "Expression bodied members ...".  If you have a method like `Colors()` that simply returns an expression then you can use the format `string[] MethodName() => expr;` rather than `string[] MethodName() {return expr;}`
3. This is a very subtle point.  An array like `{ "black", "brown",...}` works well.  It is concise well understood and gives correct results.  However it does not draw the maintainer's attention to the fact that the absolute index associated with each element of the array is of crucial importance.  A maintainer may accidentally change the order of elements in the array and cause problems.  What we are trying to do here is to reduce the opportunity for maintainers of the code to make mistakes.

## .NET Open Source
The source to the compiler and .NET Core libraries is openly available on github as is the runtime for .NET core.  The .NET Framework is closed source.  You can submit PRs.  The language team at Microsoft (led by Mads Magnusson) retain control over its direction.  I don't think there are any non-Microsoft committers but I could be wrong.  You can fork it and build your own version - although that would be a considerable undertaking.

## In praise of `const` (ref: Rotational Cipher)
> I thought const can potentially cause problem 

Good observation, but it only matters when the `const` is `public`.  You should favour `const` over `readonly static` for `private` values where the value is known and available^ at compile time and will remain unchanged over the life of the program.

^avaialble: [the docs](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/const) say that "Constants can be numbers, Boolean values, strings, or a null reference".  Actually, simple expressions made up of the foregoing are also allowed.  A very quick look at the documentation did not reveal a formal definition but it's fairly intuitive.  You can combine values with operators but you can't call functions.

I don't know whether there is a huge (or indeed any) difference in performance between `const` and `readonly static`.  For all I know the compiler, runtime and jitter may eliminate any performance differences.  You should use them because it is the idiomatic usage.  This is more than simply showing that you know what you are doing.  Using idiomatic constructs allows maintainers to instantly internalise information about a piece of code. The single word `const` tells them that the value will not be set anywhere else in the code.  Code made up of idiomatic usages is easier to grok.

## Justification for functional style (ref Leap)
> It makes it a bit harder to read for me personally

This is a non-trivial point.  You are certainly not the only one who finds the step by step imperative code easier to grok.  I think, in general, you have to be aware of your audience and put your code somewhere within their grasp.

I think I would be bold enough to say that experienced csharp developers would prefer the one liner.  I suppose I take this from what coders are doing in quality code bases and at what shops like Microsoft do.  I suspect students would want to be made aware of these practices.

## [Flags] (Ref: Allergies)
The only practical effect I have found for `[Flags]` is that it causes `ToSttring()` to output something meaningful like `Cats, Peanuts` when there the variable contains multiple flags.  There may be other subtle effects that I am missing.

## Equivalence of for loop and Enumerable.Range() (Ref: Series)
Before you decide on your final version give some consideration to using `Enumerable.Range()` to drive the iteration over the string.  If you have a simple counting loop as you do in your original submission you can always substitute a `Range()` clause so that
```
for (int i = 0; i < 10; i++)
  output[i] = i*10;
```
becomes
```
Enumerable.Range(0,10).Select(x => x * 10).ToArray();
```
Just a thought

## Perfroance (Ref: Parallel Letter Frequeny)
Most solutions put the `AsParallel` before the `SelectMany`.  (Incidentally, in your solution the intermediate `ToArray()` seems a bit of a waste. 

I messed about timing various combinations (unscientifically, as usual) and nothing seemed to make sense.  I was very disappointed in the overall LINQ performance, particularly as `Parallel.ForEach` beat it into a cocked hat (for the more realistic anthem example).

I think as we move from an imperative to a functional style the performance characteristics will become less easy to predict.  I am definitely finding that with Haskell.  Perhaps it's a good thing that we've all made up our minds that premature optimisation is misguided.  Then, again...


>  couldn't figure out how to return the result.

I've lost the original reference to this student solution using `Parallel.ForEach` but somehow managed to snaffle the code.
```
using System;
using System.Collections.Generic;
using System.Linq;

using System;
using System.Collections.Generic;
using System.Collections.Concurrent;
using System.Threading.Tasks;

public static class ParallelLetterFrequency
{
    public static Dictionary<char, int> Calculate(IEnumerable<string> texts)
    {
        var freq = new ConcurrentDictionary<char, int>();
        Parallel.ForEach(texts, (s) => {
            Parallel.ForEach (s, (c) =>
            {
                if(char.IsLetter(c)) 
                {
                    freq.AddOrUpdate(char.ToLower(c), (cKey) => 1, (cKey, cVal) => ++cVal);
                }
            });
        });

        return new Dictionary<char, int>(freq);
    }
}
```

## Truth Table (ref: Leap)
year    ((year % 4 == 0 && year % 100 == 0 && year % 400 == 0) || year % 4 == 0 && year % 100 != 0);
2019     (false         && false           && false)           || false         && true
2020     (true          && false           && false)           || true          && true
2100     (true          && true            && false)           || true          && false
2400     (true          && true            && true)            || true          && false

Remember that `true && false` always evaluates to `false` and that `true || false` always evaluates to `true`.

Notice that `year % 100 == 0` and `year % 100 != 0` always produce the opposite results and that the two instances of `year % 4 == 0` always evaluate to the same result.  Try reorganising the expression to eliminate these duplications.

## Games Programmong (ref: High Scores)
> I've tried to avoid using LINQ as I mostly dabble in Unity

Excellent counterpoint to the Exercism csharp track orthodoxy (or perhaps it's just _my_ orthodoxy).  We're obviously sensitive about the trade-offs between performance and other factors such as expressiveness but the default position tends to be the "don't optimise prematurely".  From what you say this sounds inappropriate from games programming and presumably will become tedious for a student with a games orientation.

> Would declaring scores and sortedScores readonly fix this?

Declaring fields `readonly` does not prevent the collections to which they refer from being modified.  The `readonly` modifier simply prevents a new collection from being assigned to the fields.  However, it is a good idea to make fields `readonly` where possible as this helps in groking the code.

Where performance is not an issue you can consider making the collections `IEnumerable<int>` instead of a list.  This works well for the constructor but it would require a trivial change to the signature for `Scores`.

If you need both performance and safety then you may have to use `ReadOnlyCollection<int>` rather than a list but this would require changes to the tests as well as the implementation.

I will discuss this with fellow mentors.  If your focus is games programming then there is little point in going to far down the road of LINQ and other practices (which I would normally encourage) where caching and general mutability are shunned.

I would be interested in any insights you have on this.

## LINQ solutions (ref: Pangram)

In general, a LINQ approach is safer to maintain, assuming the coder is familiar with LINQ and can come to terms with often convoluted or elliptical constructions.  Because there is no mutable state involved there is less for the maintainer to keep track of and therefore less to forget.  It seems to have the property of functional languages like Haskell of Elm in that if it compiles there is a better than even chance it will behave correctly.

In the absence of any non-functional requirements and without any coding standards I would favour a LINQ approach.  However, I find the top starred community solution which combines `IEnumerable.All` with `string.Contains` the most expressive LINQ.

## Efficiency vs. Clarity (ref: Pangram)

> Should I put efficiency over clarity?

The answer to almost all interesting software engineering problems is "it depends".  There are always trade-offs.  Is performance is important.

So how does one judge?

1) Is there an accepted efficient way of implementing some algorithm, e.g. you should always use `StringBuilder` rather than string concatenation (unless you have some very obscure requirement) irrespective of the importance of performance.
2) You should favour clarity until performance looks as if it will be an issue.  In the future your code may be read many, many times whereas platforms it runs on are more likely to get faster than slower. 
3) When coding an application (rather than a general-purpose library) you can request/make up non-functional requirements indicating necessary performance.  By monitoring performance during development you can decide as you do along what is the appropriate trade-off.   
4) Probably the most difficult circumstances in which to make a decision are when developing a general-purpose library where you don't know how it will be used.  Perhaps you can look at the speed of similar or comparable libraries and make sure is in the same ball park.

## Unicode Surrogate Problems (ref: ReverseString)

> The tricky part is that many unicode characters take up more than 1 byte.

What fun!  The problem for .NET is that a few characters such as the one that you chose take up more than 2 bytes.  Internally .NET uses UTF 16 (2 bytes) for encoding.  This is the first time in 20ish years of coding C# that I have come across the sort of problem you have so splendidly raised.  Normally we assume a string can be safely broken up into chars without our having to think about it.  

Where a unicode code point is greater than 0xffff surrogates have to be used when encoding in UTF16.  The first character contains the low surrogate and a second character contains the high surrogate.  Other parts of the system are able to stick them together to produce smiley faces etc.

Whilst your approach is effective it is a little jarring for the seasoned C# coder. I kind of think its overkill to have a stack.  A more performant approach given the likely infrequency of the problem is just to test for the presence of surrogates - somethiong like this (where `sbOut` is a `StringBuilder`):
```
sbOut.Append(input[jj]);
if (Char.IsHighSurrogate(input[jj]))
{
	(sbOut[ii], sbOut[ii - 1]) = (sbOut[ii - 1], sbOut[ii]);
}
```

You've rather undermined my faith in .NET strings.  I don't care that the occurrence of surrogates is a remote possibility or that the docs probably go on about using library routines to manipulate strings - the possibility of producing unsafe code means that using strings with LINQ (which is generally a treat) is not a risky proposition.

https://exercism.io/mentor/solutions/5ac2d9b0435e4604ac3133a4dddbbb93?iteration_idx=2#discussion-post-594839

## Performane (ref: Hamming)
> is it a matter of always measuring your optionswith the system's StopWatch()

I generally have to experiment to find out what is non-performant.  I ran 3 experiments in this case.  I usually assume LIMQ will be slower but it often surprises me by being better than I would have predicted.  When optimising code you are generally advised not to rely on intuition.  In a more large scale situation (not these small programs) you would generally consider using a profiler.

Having said all that there are some rules of thumb (I recently did a bit of Haskell and was at a complete loss about performance so I feel your pain).

* Code involving object allocation (`new`) is likely to be slower than code that avoids it.
* Use `Stringbuilder` when outputting strings
* Reflection is slow
* Anything involving external resoures e.g. writing to the console will be slow conpared to string and integer manipulation or even memory allocations.
* It's worth considering parallel execution but I always test this explicitly 

## Unicode String Reversal (ref: reverse-string)

https://qntm.org/trick

You can't. The Unicode standard does not have a concept of string reversal.

There are numerous semi-obvious ways in which a programmer could rapidly/spontaneously define "string reversal", but all of them run into serious problems when presented with arbitrary Unicode strings which may contain non-ASCII characters, combining characters, ligatures, joined "words", bidirectional text in multiple languages, surrogate pairs and so on. As the problem becomes more complex, we discover that defining reversal on an arbitrary Unicode string in a meaningful, practical way is, though probably not completely impossible, extremely difficult. The algorithm we would eventually define would be complex and highly non-obvious, taking months of work to create. Additionally, it would have to be created by the same sort of highly informed language specialists who came up with Unicode's character-combining, normalization or bidirectionality algorithms — namely, the Unicode Consortium. And then, suitable metadata might need to be added to all 100,000+ Unicode characters to facilitate the algorithm.

This has not been done, because there is no genuine real-world need for such a thing. The algorithm doesn't exist. You can't reverse a Unicode string.

A corollary is that Unicode also has no concept of palindromes (strings which read the same after being "reversed"). When encountering programming questions relating to palindromes, it's important to ascertain exactly what a "string" is considered to be, and what "reversed" is considered to mean.

## `const` (ref: resistor-color)
const](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/const)

[const vs. readonly static ](https://devblogs.microsoft.com/csharpfaq/what-is-the-difference-between-const-and-static-readonly/)

`const`ness is orthogonal to access modifiers (public, private etc).  Oranges and lemons.

A `const` value cannot be changed at run-time.  There is little functional difference between a `const` and a `readonly` variable for a primitive type, an expression containing only primitive types (.e.g added together) or a null reference.  
- The `readonly`  variable can be assigned to in the constructor whereas the `const` value is set forever by the compiler.  
- A `const` can be used as a parameter's default value whereas a `readonly` variable cannot.
- A `readonly` field can be initialised to refer to a non-primitive type whereas a `const` cannot. 
- You could change the `readonly` variable using reflection if you wanted to.  
- There may be some minimal performance difference but I think you would have to experiment in any particular case to see whether `const` had an advantage.

My rule is to use a `const` for an initialised primitive field unless it needs to be assigned in the constructor in which case I would use a `const`.  Favouring `const` reduces the cognitive load for the maintainer.  They know that there is only one possible value for the `const` identifier.


[access modifiers](https://docs.microsoft.com/en-gb/dotnet/csharp/programming-guide/classes-and-structs/access-modifiers)


## Reflections on Reflection (ref: space-age)

> In other languages I might use reflection to dynamically create methods on SpaceAge .... Is this a sensible pattern in C#?

No.  Reflection is available but is not generally used for application code (which I suppose this is a placeholder for).  You will find it in frameworks, such as ASP.NET, tools such as IDEs and some libraries.  Why not?  It is not very performant and it defeats all the static analysis that is such a benefit of a strongly typed system like C#.

## Numeric Overflows (ref: Grains)
> Would love to read some articles about the differences between data types

Try [http://www.blackwasp.co.uk/CSharpNumericDataTypes.aspx](http://www.blackwasp.co.uk/CSharpNumericDataTypes.aspx) - let me know if it suits your purpose and I will add to our resources

> why a double cast to ulong resulted in an overflow and decimal cast to ulong works fine

In both depends on the contents of the source value.  If the source value lies outside the range of the destination variable then there will be an overflow.  This may be too many digits or the source may be negative and the destination an unsigned variable.

Have a look at the `checked` keyword for a mechanism to stop such an overflow being silently swallowed.
        
## Immutability and The Consequences of Bypassing an API (ref: high-scores)
> I don't understand how class's explicit API can be by-passed

Imagine you have a code base of 250,000 lines of code for a game.  As the lead developer you create a routine to instantiate the high scores object, populate it with the current stars of your game and make it avaiable for use throughout the codebase for display or whatever.  

The new developer on your team comes across this object and thinks "ah - I'll borrow that and change the scores for some purpose of my own".  They get hold of the list of scores by calling `Scores()` and repopulated it with their own set of values.

The upshot is the wrong scores start showing up.  As the lead developer you put a break point in your high scores instantiation routine because you know that's the only place a high scores object can be created.  The break point is never activated (because the new dev. bypassed the normal approach to populating it).  

Disaster.  Best avoided by making a bullet proof API that cannot be circumvented.

I'm happy to keep discussing this.    

## Read-only Dictionaries (ref: resistor-color)
> Why should one use an IReadOnlyDictionary rather than readonly Dictionary in your suggestion, or ImmutableDictionary for that matter?

- `readonly` My code should include this modifier.  `readonly` protects the field value but not what it refers to.  It prevents a completely different dictionary being assigned to the field but the coder can happily continue to add items to and remove them from the dictionary.
- `IReadOnlyDictionary` is a strong hint to a maintainer that items cannot be added to or removed from the dictionary.  A variable of this type has no methods for adding or removing.  In order to make such a change the coder will have to downcast to a `Dctionary`.
- `ReadOnlyDictionary` will prevent a coder from adding items to or removing items from a dictionary (casting will be no help).  It must be initialised in full when it is created.
- `ImmutableDictionary`. Any changes to an immutable dictionary preoduce a completely new immutable dictionary.  If code takes a reference to an immutable dictionary it is guaranteed the keys and references within the dictionary will not change.  My experience with .NET Core 2 was that this was not very performant (don't know about .NET Core 3).

In none of these cases are the contents of a reference object which is a value in a dictionary protected.  If I have a dictionary mapping names to Person objects then no matter if it is a `ReadOnlyDictionary` or `ImmutableDictionary` I can change the contents of the Person (asuuming non-read-only properties, methods or fields are exposed).

I typically use ImmutableDictionary when I want extremely functionally flavoured code (really only as an experiment given the performance penalty).

I typically use IReadOnlyDictionary to indicate that the contents of the dictionary are set for its lifetime.  If some coder wants to break things by down casting then I can only wish them ill.

I never use `ReadOnlyDictionary` as it seems a bit messed up.  It supports the `IDictionary` interface but not `IReadOnlyDictionary` and requires to the user to call `IsReadOnly`.  Either I have misunderstood or this is weird.

## Localization (ref: resistor-color)
Perhaps my use of the term "localization" was a bit grandiose.  I was just trying to give an example of the kind of way software requirements can change.  For example suppose we wanted to allow french terms as well as english we could have a dictionary of { "black", 0}, {"noir", 0}...

Of course, [globalization and localization](https://docs.microsoft.com/en-us/dotnet/standard/globalization-localization/) are a big issue in .NET involving Culture, CultureInfo, number and date formatting, resource files etc.  Logistically it's rather difficult to illustrate these issues on the Exercism platform.  

Note that the heavy lifting of translated text tends to be facilitated by frameworks such as [ASP.NET](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/localization?view=aspnetcore-3.1)

## Justification for Constrained Objects (ref: robot-name)
You may want to consider how it helps the maintainer for the behaviour of objects to be constrained as much as is compatible with functionality. There is less for the maintainer to think about, less for them to check on when reasoning about the code.

## When to Use Statics (ref: RobotName)
You must use `static` for `listRobotName` because all instances of `Robot` must register their names with the same hash set and because it is static there is only one hash set (listRobotName) in the program.

You may use `static` for `rd`.  Functionally it makes no difference whether all instances share a `Random` object or if each instance has its own private copy.  However, it often better style (and I would say so in this case) to make an object `static` if that is compatible with its functionality.  There is a slight performance penalty for the non-static of the memory allocation.

One reason to avoid wide use of statics is where multi-threading is in use.  In this case you would have create a static concurrent hash set for the names and give each robot its own copy of `Random`.

## Operations on Indexer Properties (ref: nucleotide-count)
> `dnaDictionary[array[i]] = occurrence + 1`

`dnaDictionary[array[i]]++` will work.

you would have thought that you would have to do it your way.  dict[x] is a primitive value (an lhs if I recall my C).  How can incrementing this expression have an effect on the contents of a dictionary.

Apparently the C# compiler takes a different view when it comes to indexer properties.  See [here](https://stackoverflow.com/questions/28269825/in-c-why-does-dictionary0-work).  I struggle to be entirely comfortable with this.  I suppose if I accept that this is how it works for normal properties (which I do) then I suppose having the precise same mechanism for indexer properties must be the only way to go.

## Thoughts on Mentoring (ref: QueenAttack)

> since that would minimize the amount of object creation

For me it is less a matter of performance and more a kind of comfort that as a maintainer I can see what is what - hardly a cogent argument.

> I figure the point of these exercises is more to challenge us to develop efficient and interesting algorithms

That's an interesting take on it.  Perhaps it's my perspective and background as an application programmer in business and productivity tools but I have little to say on algorithms - I don't think I'd be any good at code golf or the euler problems.  My role is to make sure

* that the student is aware of the available .NET tools and language features relevant to their problem
* that the choices they make support principled programming such as SOLID and DRY
* that the student is aware of trends such as LINQ, the push towards functional programming and immutability
* that they are aware of any shibboleths (such as being religious about `StringBuilder`) so that they will fit into a C# shop

I don't know what to say about algorithms - take "grains" if you know that 64! is 0xffffffff (or something like that) then that saves you a deal of processing but to comment on it is very much a case of "giving a man a fish".

Some algorithms are easier to understand than others but I don't know how to push a student towards them - or maybe I'm just to lazy.  

I'm looking forward to you tackling "ZebraPuzzle".  I gave it a go  and it defeated me (I will return).  When I raised it with fellow mentors I was told it was dead easy so presumably I am missing something.