LINQ

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


In praise of LINQ
Hamming n8water
https://exercism.io/mentor/solutions/241cbdcc829840ee90e4a996d5480a07?iteration_idx=2

Distaste for globals + giving multiple cases

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

iteration vs. recursion

Iteration would generally be faster than recursion except if the language/environment supports tail-call optimisation and your code takes advantage of it.  This of course would also overcome the stack overflow problem.

In the case of .NET I think that F# may support tail-call optimisation and C# does not but I cannot refer to an authoritative statement on this.

----------------------
static:

My comments are motivated, in this case, by the wish to make life easier for a future maintainer of the code.  Obviously, there are other considerations such as performance or initial coding effort but the points below do not affect those.

Multi-threading: one of the main reasons to avoid static, writeable (mutating) fields is that they render the class non-thread-safe.  Say a maintainer introduces multi-threading.  Imagine 2 threads both executing `Steps()` simultaneously. It is likely that both threads would affect the `_steps` field and they would both end up with an inflated (wrong) number of steps.

Threading is a very practical point and probably a winning argument on its own. But a more subtle, and I think, important point is that the inclusion of statics makes the code more difficult to reason about.  Your initial submission shows a classic case of this where you omitted to clear the field each time `Steps()` is called.

Because the power and scope of a stack (non-field) variable is so much less than that of even a private field it is far easier to understand/internalise what its role is without giving it a second look.  This is even more the case for return values particularly from private methods.

Of course, in this exercise, a maintainer is unlikely to be caught out.  The code is short and its current usage is well defined.  But imagine it is part of 20,000 lines of code it would be good to know (even without finding it in the code base) that it has been written as safely as possible with the maintainer in mind.

When is it appropriate to use it?  

It is appropriate to use writable static fields when you assess the relative claims of coding effort, readability, likelihood of threading being introduced, exposure to a wider code base (i.e. by number of references) and decide that the reasons I put forward above are not the most important.

An example might be a small library which is protected from multiple thread executions through its API, where perhaps you want some instrumentation on the code to show how many times a method is called.

