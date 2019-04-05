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