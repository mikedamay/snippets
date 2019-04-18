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


