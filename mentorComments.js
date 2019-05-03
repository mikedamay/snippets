export const text = {
  exercises : {
      twofer : {
          'null-coalescence' : {
              feature : 'Suggest null coalescence',
              category : 'discussion-point',
              text : `You may want to consider the null coalescence operator \`var expr = "something or nothing"; var default_val = "nothing"; var foo = expr ?? default_val;\``
          },
          'string-interpolation' : {
              feature : 'Suggest string interpolation',
              category: 'discussion-point',
              text: `You may want to consider string interpolation \`var expr = "abc"; var foo = $"this is {expr}";\``,
          },
          'suggest-you' : {
              feature : 'Suggest "you" as default parameter',
              category: 'discussion-point',
              text : `You may want to consider default parameter can be something other than null - \`void foo(string bar = "you"){}\``
          },
          'suggest-default-parameter' : {
              feature : 'Suggest default parameter',
              category: 'discussion-point',
              text : `You may want to consider the use of a default parameter which will allow you to use a single overload of \`Speak()\``
          },
          'default-parameter' : {
              feature : 'Default parameter used',
              category: 'discussion-point',
              text : `The solution does not address the case of an empty string being passed in`
          },
          'non-var-expression' : {
              feature : 'Expressions, not just variables',
              category: 'discussion-point',
              text : 'String interpolation can handle any expression not just single variables, e.g. \` $\"my name is {firstName + " " + lastName}\"\`'
          },
          'exercism-approach' : {
              feature: 'How to use Exercism',
              category : 'review-point',
              text : `
Exercises in Exercism are designed to be run by unit tests. Pay close attention to the instructions 
about running the tests, and follow the link there to the C# language page if you're running into trouble. 
Your submission is expected to return a value rather than outputting it to the console. 
Your initial download should have included a Twofer.cs file with a template for you to get started with. 
Once you've got that figured out, go ahead and submit a new solution. :-)

As a consequence of this approach you cannot include \`Console.ReadLine()\` and other console read statements in the code as these "block" the execution.
              `
          },
      },
      leap : {
          'basic-logic' : {
              feature: 'Point out basic logic to user',
              category : 'review-point',
              text : `
You care about 3 things
* is the year divisible by 4
* is the year divisible by 100
* is the year divisible by 400

You can combine these in a single expression using _and_ \`&&\`, _or_ \`||\` and _not_ \`!\`.

give it a try
              `
          },
          'exercism-approach' : {
              feature: 'How to use Exercism',
              category : 'review-point',
              text : `
Exercises in Exercism are designed to be run by unit tests. Pay close attention to the instructions 
about running the tests, and follow the link there to the C# language page if you're running into trouble. 
Your submission is expected to return a value rather than outputting it to the console. 
Your initial download should have included a Leap.cs file with a template for you to get started with. 
Once you've got that figured out, go ahead and submit a new solution. :-)

As a consequence of this approach you cannot include \`Console.ReadLine()\` and other console read statements in the code as these "block" the execution.
              `
          },
          'parens' : {
              feature: 'Parens are optional',
              category : 'discussion-point',
              text : 'parentheses are optional in this case as operator precedence works in your favour.  You may prefer to keep them for readability'
          },
          'avoid-literals' : {
              feature: 'Avoid boolean literals',
              category : 'discussion-point',
              text : `
There is no requirement for a conditional statement and boolean literals.

Instead of having an if-statement and explicitly returning \`true\` or \`false\`, you could also just return the expression in the if-statement.

Consider the following two bits of code, which are functionally equivalent:
\`\`\`
if (x > 1)
{
    return true;
}

return false;
\`\`\`
and
\`\`\`
return x > 1;
\`\`\`
You can combine the expressions with "and", \`&&\` and "or", \`!!\` to avoid conditional statements.
              `
          },
          'avoid-ternary-literals' : {
              feature : 'Don\`t use ternary + boolean literals',
              category : 'discussion-point',
              text : `
There is no requirement for boolean literals and a ternary expression.

Instead of having an ?  : and explicitly returning \`true\` or \`false\`, you could also just return the expression .

\`\`\`
return allOK ? true : false;
\`\`\`
can be replaced with
\`\`\`
return allOk;
\`\`\`             
You can combine the expressions with "and", \`&&\` and "or", \`!!\` to avoid conditional statements.
 `
          }
      },
      gigasecond :  {
          'thousands-separator' : {
              feature: 'Suggest thousands separator _',
              category : 'discussion-point',
              text : `C# provides a 'thousands' separator '_', as in \`1_000_000_000\` which improves readability.  \`1e9\` is also available.
`
          },
          'add-seconds-missing' : {
              feature : 'Suggest DateTime.AddSeconds',
              category : 'discussion-point',
              text : `Arguably \`moment.AddSeconds\` is slightly more concise and readable`
          },

      },
      'resistor-color' : {
          'dictionary-present' : {
              feature : 'Suggest color array',
              category : 'discussion-point',
              text : `Another approach is to use an array of colors`
          },
          'color-array-present' : {
              feature : 'Suggest dictionary',
              category : 'discussion-point',
              text : `Another approach is to use a dictionary`
          },
          'ideal-solution' : {
              feature : 'Suggest Dictionary of string to enum',
              category : 'discussion-point',
              text : `Arguably the most maintainable solution would be a dictionary mapping string color names to explicit enums. This would apply if both color names and color values are mapped outside of this code, for example in a design document or a spec. Implicit mappings are less maintainable. As a bonus it's easier to mentally map the dictionary to the spec file.`
          },
          'readonly-dictionary-present' : {
              feature : 'Acknowledge that the read only dictionary is a good thing',
              category : 'discussion-point',
              text : `Making the dictionary read only, as you have, keeps maintainers on the right track`
          },
          'suggest-clone-array' : {
              feature : 'Color array should be cloned',
              category : 'discussion-point',
              text : `Consider cloning the array on return from \`Colors()\` as a defensive measure.  This will prevent a user of the class from accidentally overwriting the values.`
          },
          'switch-present' : {
              feature : 'Learner is using a switch statement',
              category : 'discussion-point',
              text : `Consider a read only, initialised dictionary as an alternative to the switch statement`
          },
          'ro-dictionary' : {
              feature : 'Make dictionary read only',
              category : 'discussion-point',
              text : `Consider making the dictionary a readonly collection as a strong hint to maintainers`
          },
          'index-of' : {
              feature : 'Suggest Array.IndexOf',
              category : 'discussion-point',
              text : 'You can use `Array.IndexOf` to convert color names to their equivalent value'
          },
          'performance' : {
              feature : 'ColorCode() instantiates the array ',
              category : 'discussion-point',
              text : `
 \`ColorCode()\` causes the color array to be instantiated each time it is called.  This is not optimally performant.
`
          },


      },
      'space-age' : {
            'suggest-ro-dict' : {
                feature : 'Suggest that Learner makes the dictionary read only',
                category : 'discussion-point',
                text : 'Making the dictionary read only would keep maintainers on the right track'
            },
            'suggest-enums' : {
                feature : 'enums rather than strings for planet names',
                category : 'discussion-point',
                text : 'Using an enum rather than strings for planet names would avoid the possibility of bugs being introduced by typos'
            },
            'gather-constants' : {
                feature : 'Suggest that year lengths are more readable in a bunch',
                category : 'discussion-point',
                text : `
Arguably it is helpful to gather the year values 
together in one place say as a bunch of constants 
or a dictionary of some sort.  This helps when 
reasoning about the validity of the values (as 
they are easy to compare) amongst other things.
The downside is that you have to make multiple
code changes when you add or remove a planet.
                `,
            },
          'use-given-numbers' : {
              feature : 'Advise learner to use numbers from the instructions',
              category : 'discussion-point',
              text : 'The instructions provide the number of seconds in an earth year.  If we see the instructions as a sort of stand-in for the business rules then it might make more sense to reflect this back in the code rather than calculate the value'
          },
         'rounding-unnecessary' : {
              feature : 'Rounding is not necessary',
              category : 'discussion-point',
              text : 'There is no need to apply the rounding yourself.  The test infrastructure handles that in the comparison.  On balance you are liable to do more damage with premature rounding than without'
          },
         'read-only-variables' : {
              feature : 'The variables can be read only',
              category : 'review-point',
              text : 'The variables can be read only.  A "read only" discipline helps maintainers reason about the code and internalise its behaviour'
          },
         'enums-used' : {
              feature : 'Good use of \`enum\`',
              category : 'review-point',
              text : 'Good use of \`enum\`'
          },
         'encapuslation' : {
              feature : 'good encapsulation',
              category : 'review-point',
              text : 'Good idea to encapsulate the calculation in its own method - you never know when that might come in useful'
          },
      },
      'high-scores' : {
          'suggest-ro-field' : {
              feature : 'Suggest read only field',
              category : 'review-point',
              text : 'The field can be made read only.  "read only" discipline is good as it allows maintainers to reason better about the code.'
          },
          'suggest-ro-prop' : {
              feature : 'Suggest read only property',
              category : 'review-point',
              text : 'The property can be made read only (remove `set`).  "read only" discipline is good as it allows maintainers to reason better about the code.'
          },
          'read-only' : {
              feature : 'Good use of read only',
              category : 'review-point',
              text : 'Good use of read only members'
          },
          'suggest-linq' : {
              feature : 'Suggest a LINQ based approach',
              category : 'discussion-point',
              text : 'I am happy to discuss a solution based on LINQ.  This is the ideal exercise to consider it as it particularly enhances readability here,'
          },
          'linq-available' : {
              feature : 'LINQ methods',
              category : 'discussion-point',
              text : `
There are a number of LINQ methods that may simplify the code:
\`\`\`
IEnumerable.Max()
IEnumerable.Last()
IEnumerable.OrderByDescending()
IEnumerable.Take()
\`\`\`                  
              `
          },
          'suggest-clone-collection' : {
              feature : 'Clone list should be cloned',
              category : 'discussion-point',
              text : `Consider cloning the list on return from \`Scores()\` as a defensive measure.  This will prevent a user of the class from accidentally overwriting the values.  Maybe the list passed in should also be cloned.  What do you think?`
          },
          'undersccores' : {
              feature : 'Consider _ => _',
              category : 'discussion-point',
              text : 'I came across `OrderByDescending( _ => _)` recently which I liked'
          },
      },
      'hamming' : {
          'performance-comparison' : {
              feature : 'Performance Comparison',
              category : 'discussion-point',
              text : `
There are two obvious LINQ approaches - \`IEnumerable.Zip()\` 
and one based around \`IEnumerble.Select()\` (or one that accesses
the second strand by index in some other way).  The "Zip" approach takes
twice as long as the indexed approach (but less LINQy).  A typical
non-LINQ approach is about 3 times the speed of "Zip".  

Zip is more LINQy than the other approach as it can work entirely with \`IEnumerable\`.  No indexer required.       
                  `
          },
          'linq-possibility' : {
              feature : 'LINQ is an option',
              category : 'discussion-point',
              text : 'I\'m happy to discus a LINQ based solution with you if that is of interest.'
          },
      },
      'circular-buffer' : {
          'queue' : {
              feature : 'suggest queue',
              category : 'discussion-point',
              text : 'I think the setter\'s intention was that the buffer be implemented using low level constructs as you have but if you look at some of the high starred solutions you will see how use of a BCL class like Queue simplifies the code.'
          },
          'default-used' : {
              feature : 'Solution uses default(T)',
              category : 'discussion-point',
              text : 'I see that you are using `default(T)` in a number of places.  Are you sure this will work with primitives where the default, such as zero could be a valid entry in the buffer.'
          },
      },
      'nucleotide-count' : {
          'suggest-ro-dict' : {
              feature : 'Suggest that the dictionary should be read only',
              category : 'discussion-point',
              text : `
You should consider returning a read only version 
of the dictionary to the caller.  This will guide 
maintainers in how you expect the dictionary to be used.
             `
          },
          'suggest-plus-plus' : {
              feature : 'Suggest use of ++',
              category : 'discussion-point',
              text : 'The operator ++ / +=1 can be used with the value returned from dictionary (even primitive values)'
          },
          'consider-except' : {
              feature : 'Consider Except',
              category : 'discussion-point',
              text : 'Consider `IEnumerable.Except()` as an approach to validation'
          },
          'dictionary-init' : {
              feature : 'You can initialise the dictionary',
              category : 'discussion-point',
              text : `
The idiomatic way to initialise a dictionary is as follows:
\`\`\`
var dict = new Dictionary<string, int> { {"one", 1}, {"two", 2}...};
\`\`\`
              `
          },
      },
      'robot-name' : {
          'reflect-bus-rules' : {
              feature : 'name construction should reflect business rules',
              category : 'discussion-point',
              text : `
One aspect of expression is the relationship of the code to the business rules.  In this case we have been told to generate 2 letters and 3 numbers. If the maintainer sees 2 lines of code relating to letters followed by 3 lines of code relating to numbers they won’t even stop to consider it.  With your (perfectly good - but not meeting my expressiveness criterion - solution) the number 5 is involved which is good but then there is some question of a special condition of less than 2 that they will have to stop and parse.  They also have to recollect their ascii codes to parse the rest of it.

Arguably something like the following may be more expressive.  A loop and condition will not bring the business rules to mind as instantly for the maintainer.
\`\`\`
  newName += (char)rnd.Next(‘A’, ‘Z’ + 1);
  newName += (char)rnd.Next(‘A’, ‘Z’ + 1);
  newName += (char)rnd.Next(‘0’, ‘9’);
  newName += (char)rnd.Next(‘0’, ‘9’);
  newName += (char)rnd.Next(‘0’, ‘9’);
\`\`\`
is worth considering.
              `
          },
          'literal-ints' : {
              feature : 'don\'t use ASCII codes',
              category : 'discussion-point',
              text : 'Rather than expressing letters with their ascii value you can use their literal value, i.e. `Next(\'A\', \'Z\' + 1)`'
          },
          'exit-condition' : {
              feature : 'You need an exit condition',
              category : 'review-point',
              text : 'You don\'t have an exit condition for when all name slots have been used up - the robots are coming!'
          },
          'string-interpolation' : {
              feature : 'interpolation works well',
              category : 'review-point',
              text : 'The string interpolation approach that you have chosen works well here'
          },
          'unique-robots' : {
              feature : 'uniqueness check is required',
              category : 'review-point',
              text : 'You need a mechanism to ensure that no duplicates are generated'
          },
          'static-name-set' : {
              feature : 'names must be static',
              category : 'review-point',
              text : 'The field containing the names must be static in order for it to contain names from other Robots'
          },
          'next-exclusive-upper-bound' : {
              feature : 'upper-bound',
              category : 'review-point',
              text : 'Random.Next\'s second parameter is an exclusive bound - one past the last valid value'
          },
          'char-int' : {
              feature : 'Avoid Conversions between char and int',
              category : 'discussion-point',
              text : 'You don\'t need to use the `Convert` utilities between int and char.  char is implicitly promoted to an int and a simple cast works in the opposite direction.'
          },
          'flawed-requirements' : {
              feature : 'Address the flawed requirements',
              category : 'discussion-point',
              text : `
The simple (and admittedly flawed) solution is to check on the number of names in \`robots\` and reject an attempt to add names when there were 26 * 26 * 1000.

> Would be better if I know the last name generated so that I could continue generating names from there.

You are of course quite right.  The requirements are problematic.  Generating names in this way randomly is not sensible.  The processing cost would be too great

One approach, if you do not care about memory usage and start up time, is to generate all the names at the start, sort them into a random order and then keep a counter as to which has been used.  You then have the question of handling reset robots.  Who needs it!              
`

          },
      },
      'allergies' : {
          'flags' : {
              feature : 'Suggest flags',
              category : 'discussion-point',
              text : `
An alternative approach is to use an enum mutually exclusive  bit values e.g. 
\`\`\`
enum Allergen
{
  Eggs = 1 << 0,
  Peanuts = 1 << 1,
  Shellfish = 1 << 2,
...
}
\`\`\`
If you add the \`[Flags]\` attribute you can then use \`Enum.HasFlag()\` and \`Enum.GetValues()\` to implement the methods.
              `
          }
      },
      'grade-school' : {
          'simple-solution' : {
              feature : 'Simple LINQ solution',
              category : 'discussion-point',
              text : 'There are many ways to address this problem.  If you believe that Read performance is not an issue then the code can be radically simplified by having a list of name+grade and using LINQ routines to order and report on that.'
          },
      },
      'rotational-cipher' : {
          'unicode' : {
              feature: 'Take a consistent position on unicode',
              category: 'discussion-point',
              text: 'Note that `IsLetter()` applies to unicode characters not just ASCII'
          },
          'string-linq' : {
              feature: 'No need for char array',
              category: 'discussion-point',
              text: 'There is no requirement to convert the string to an array as it implements `IEnumerable<char>`'
          },
          'literal-ints' : {
              feature : 'don\'t use ASCII codes',
              category : 'discussion-point',
              text : 'Rather than expressing letters with their ascii value you can use their literal value, i.e. `minChar = \'A\')`'
          },
          'string-builder' : {
              feature : 'Favour a StringBuilder',
              category : 'discussion-point',
              text : 'For performance reasons you should favour using a StringBuilder object over string concatenation'
          },

      },
      'clock' : {
          'formula' : {
              feature : 'Good modulus formula',
              category : 'discussion-point',
              text : `
A neat modulus formula that simplifies some of the negative handling is:
\`\`\`
int Mod(double x, double y) => (int)(((x % y) + y) % y);
\`\`\`
              `
          },
          'struct' : {
              feature : 'Struct',
              category : 'discussion-point',
              text : 'a lot of problems with `Equals()` are solved by making `Clock` a `struct` as equality testing is built in for a simple object like this'
          },
          'equality' : {
              feature : 'The Equality story',
              category : 'review-point',
              text : `
When it comes to testing equality you're expected to follow a particular pattern (similar to the notorious one in Java).

if you provide an \`Equals()\` method you are also expected to provide a corresponding \`GetHashCode()\` method and
to honour \`object\`'s contract for \`Equals()\`.

My IDE (Rider) generates the following code.              
\`\`\`
protected bool Equals(Clock other)
{
    return hours == other.hours && minutes == other.minutes;
}

public override bool Equals(object obj)
{
    if (ReferenceEquals(null, obj)) return false;
    if (ReferenceEquals(this, obj)) return true;
    if (obj.GetType() != this.GetType()) return false;
    return Equals((Clock) obj);
}

public override int GetHashCode()
{
    unchecked
    {
        return (hours * 397) ^ minutes;
    }
}
\`\`\`
 1. You need the Equals(object) in order for your object to honour its contracts. In inheriting from object you assert that you can be passed an object for comparison so you had better handle it correctly.
 2. The first ReferenceEquals is null protection.
 3. The second ReferenceEquals is for performance
 4. GetHashCode() and the need for consistency with Equals are a bit more hazy. The hashcode is used, in particular, by dictionaries and sets and the bumping with a random number apparently spreads out the distribution in whatever tree structure they use. I suspect 5 moinutes of introspection or web search would reveal the importance of equality in this mix.
 5. \`protected...Equals(...)\` is for performance
 
Let me know if you have any points to discuss on this. 
              `
          },

      },
      'bracket-push' : {
          'stack' : {
              feature : 'Stack is good',
              category : 'review-point',
              text : 'A stack of some sort is a good way to approach this (including recursion which is functionally equivalent'
          },
      },
      'bank-account' : {
          'balance' : {
              feature : 'Case for Balance',
              category : 'review-point',
              text : 'Balance should probably also be subject to a lock as decimal operations are not guaranteed to be atomic'
          },
          'monitor' : {
              feature : 'monitor provides a facility for a timeout',
              category : 'discussion-point',
              text : 'You can use Monitor.TryEnter as an alternative to lock() {} which allows for a timeout '
          },
          'methodimpl' : {
              feature : 'MethodImpl is an alternative',
              category : 'discussion-point',
              text : 'Possible Alternative: the Base Class Library provides an attribute MethodImplOptions.Synchronized which, when applied to a member, causes the instance to be locked.  However there are dangers in locking an instance as you lose control over who can lock the instance.  See [this SO question](https://stackoverflow.com/questions/251391/why-is-lockthis-bad)'
          },
          'ReaderWriterLockSlim' : {
              feature : 'ReaderWriterLockSlim is another alternative',
              category : 'discussion-point',
              text : 'Possible Alternative: ReaderWriterLockSlim can be used.  It is more flexible than a bare lock.  See [this](https://docs.microsoft.com/en-us/dotnet/api/system.threading.readerwriterlockslim?view=netcore-2.2)'
          },
      },
      'collatz-conjecture' : {
          'offer-recursive' : {
              feature : 'Is student interested in recursive solution',
              category : 'discussion-point',
              text : 'Let me know if you are interested in attempting a recursive solution'
          },
      },
      'grains' : {
          'right-shift' : {
              feature: 'right shift',
              category: 'discussion-point',
              text: 'The bitwise operator right shift \`<<\` is a performant approach to powers of 2'
          },
      },
      'isogram' : {
          'suggest-linq' : {
              feature: 'Suggest LINQ',
              category: 'discussion-point',
              text: 'You might want to think about a LINQ based solution (or you might not see the point in which case let me know).  Use of `Distinct()` or `GroupBy()` indicate two different ways to approach this.'
          },
      },
      'pangram' : {
          'suggest-linq': {
              feature: 'Suggest LINQ',
              category: 'discussion-point',
              text: 'You might want to think about a LINQ based solution (or you might not see the point in which case let me know).  Use of `Except()` or `Count()` indicate two different ways to approach this.'
          },
          'unicode' : {
              feature: 'Take a consistent position on unicode',
              category: 'discussion-point',
              text: 'Note that `IsLetter()` applies to unicode characters not just ASCII'
          },
          'single-loop' : {
              feature: 'Suggest a single loop',
              category: 'review-point',
              text: 'Try to find an approach that uses a single loop.  Your nested loop approach is a little wasteful'
          },
          'array-indexof' : {
              feature: 'Suggest Array.Indexof',
              category: 'discussion-point',
              text: 'You might be able to simplify your lookup with `Array.IndexOf`'
          },
          'string-tochararray' : {
              feature: 'string.ToCharArray is not necessary',
              category: 'discussion-point',
              text: 'You don\'t have to use `string.ToCharArray()` if you only want to read the string'
          },
          'linq-alternatives' : {
              feature: 'LINQ alternatives',
              category: 'discussion-point',
              text: `
Some possible LINQ approaches are:
* \`IEnumerable.Except()\` plus \`IEnumerable.Any()\`
* \`IEnumerable.Any()\` plus \`string.Contains()()\`
* \`IEnumerable.GroupBy()\`
* \`IEnumerable.Distinct()\` plus \`IEnumerable.Count()\`

              `
          },
      },
      'perfect-numbers' : {
          'square-over-2' : {
              feature : 'Use Square Root rather than divide by 2',
              category : 'discussion-point',
              text : 'Dividing the number by 2 is a big performance win when calculating factors but using the square root would improve it further'
          },
          'square-root' : {
              feature : 'Use Square Root rather than number',
              category : 'discussion-point',
              text : 'More of a maths point than C# but when calculating the factors you can stop when you reach the square root of the original number'
          },
      },
      'reverse-string' : {
          'use-sb' : {
              feature : 'Use StringBuilder',
              category : 'review-point',
              text : 'For performance reasons you should use a StringBuilder to construct the output string'
          },
      },
      'rna-transcription' : {
          'read-only-dict' : {
              feature : 'Expose as a read only dictionary',
              category : 'discussion-point',
              text : 'you could make the dictionary read only (possibly, simply, through a read only interface)'
          },
          'dictionary' : {
              feature : 'Use a dictionary',
              category : 'discussion-point',
              text : 'you could consider an initialised dictionary which might emphasise the relationships more clearly than the switch statement'
          },
      },
      'roman-numerals' : {
          'simplify' : {
              feature : 'simplify by adding edge cases',
              category : 'discussion-point',
              text : 'One way of simplifying this is to include the "decremented" numbers in the list of numbers eg. `{4, "IV"}, {9, "IX"}`.'
          }
      },
      'scrabble-score' : {
          'indexable-string' : {
              feature : 'No need for char array',
              category : 'discussion-point',
              text : 'There is no need to convert string to a char array - strings are indexable'
          },
          'linq' : {
              feature : 'LINQ hints',
              category : 'discussion-point',
              text : `
LINQ:  
Your dictionary should stay. Use it in a \`Select\` expression.

You may need \`IEnumerable.DefaultIfEmpty()\`

Bear in mind that a string implements \`IEnumerable<char>\`.

You can use \`IEnumerable.Aggregate()\` to accumulate

I'm happy to continue the LINQ discussion
              `
          },
      },
      'sum-of-multiples' : {
          'perf' : {
              feature : 'Performance',
              category : 'review-point',
              text : `
This works well for the tests but try to broaden the range of inputs that the routine can handle e.g.
\`\`\`
Assert.Equal(1_999_999_999, SumOfMultiples.Sum(new[] { 1_999_999_999 }, 2_000_000_000));
\`\`\`
              `
          },
          'how-to-fix-perf' : {
              feature : 'How to fix performance',
              category : 'discussion-point',
              test : `
The trick is to examine the inputs one at a time.  For each input you can see which numbers between 0 and \`max\` are multiples of that input.  But you don't have to check every number between 0 and \`max\` only those that are multiples of the input!  

You will have to find a way that avoids integer overflow.              `
          },
      },
      'xxx-general' : {
          'good-solution' : {
              feature : 'A Good Solution',
              category : 'review-point',
              text : `Good solution`
          },
          'effective-solution' : {
              feature : 'An Effective Solution',
              category : 'review-point',
              text : `Effective solution`
          },
          'limited-solution' : {
              feature : 'A Limited Solution',
              category : 'review-point',
              text : `This is an effective solution as far as it goes`
          },
          'invitation' : {
              feature : 'Modify, argue or query',
              category : 'end-point',
              text : `Please modify, argue or query as seems appropriate`
          },
          'promised-sign-off' : {
              feature : 'Pre-sign-off Modify, argue or query',
              category : 'end-point',
              text : `Please modify, argue or query as seems appropriate and I will sign off`
          },
          'empty-string' : {
              feature : "Try \`string.Empty`",
              category : 'discussion-point',
              text : `\`string.Empty\` is an idiomatic alternative to \`""\``
          },
          'decision-criteria' : {
              feature : 'screed on principle based coding',
              category : 'discussion-point',
              text : `Review Points:

    Good solution

Discussion Points:

    How to make these decisions?  What are the criteria?  Simplicity or extensibility?  These are the questions.

    Performance:

Are you working on an application or a library?  If it's an application then  it is likely you can make far more assumptions about performance.  You can often delay decisions about performance until you hit problems.  With a genuine library you are less likely to know how it will be used so you are likely to favour performant solutions.

Maintainability:

    Your code will be written or modified a few times but the chances are it will be read and reasoned about on many occasions.  Favour code that is easy to read, easy reason about and contains as few gotchas as possible for the unwary maintainer.

    Principle Based:

    Software Engineering has many best practices and much received wisdom.  Everything from avoiding \\\`goto\\\`s to SOLID principles and defensive programming (as advocated by luminaries like Joshua Bloch).  Not only is this generally good advice in its own right but following these principles will allow maintainers to "get on the same page" quicker.

    Agile Principles

A significant principle in the case of your solution is doing just enough to meet the spec.  We do not have a great track record at anticipating what the next change to code will be so avoid expending too much effort in that direction.  This is particularly applicable if you have comprehensive tests and a good refactoring tool.

    So:
* if the performance difference between two solutions is not a concern then select the more maintainable one
* if there is not much to choose between the maintainability of two solutions then chose the one that follows software engineering principles.
* If two solutions are equivalent in terms of engineering principles then go for the agile one.

    There's other stuff that needs to be attended to - idiomatic code, coding and design standards, informal project conventions, development effort, and, obviously, correctness - the code does what you intend.

You will see there is nothing too prescriptive it's about what the circumstances "favour".  If on applying the criteria you are left with equally appropriate solutions then decide with the toss of a coin or on a whim.

As hinted at above.  I think you made the right decision based on the agile principle.

Other concerns: ease of debugging, ease of documentation, intuitive - close to mental model, refers to business rules

Accepted coding conventions - use a StringBuilder even when you are unconcerned about performance.

reusability of code.
`
          },
          'expression-bodied-present' : {
              feature : "Expression bodied members work well here",
              category : 'review-point',
              text : `Your expression bodied members work well in this solution`
          },
          'suggest-expression-bodied' : {
              feature : "Suggest expression bodied members ",
              category : 'discussion-point',
              text : `Expression bodied members would work well for this solution`
          },
          'comments' : {
              feature : "Purpose of comments?",
              category : 'mentor-question',
              text : `What do you see as the purpose of your comments?`
          },
          'favour-private' : {
              feature : "Favour private members",
              category : 'discussion-point',
              text : `
It is generally considered better to give member fields and support methods and properties private access.  Public declaration increases the amount of noise in the API and constrains maintainers who may want to change the implementation.  Let me know if you want to discuss further.
              `
          },
          'try-catch' : {
              feature : "Try/catch confusion",
              category : 'discussion-point',
              text : `
Regarding your "if" question: you have coded it correctly.  It is easy to get somewhat confused about exceptions before you have had a chance to see them from both sides.

You use try/catch when you are expecting a library or the run-time to throw the exception.  In this case your code is the one that is detecting an exceptional condition and therefore you have to do the throwing and the caller of your routine has the try/catch.

Unfortunately, in the case of the xunit tests the try/catch code is hidden from you inside the \`Assert.Throws()\` method but I can assure you it is there

For when you do need to use it a typical try/catch construction might look something like the following.  Again xunit does not help as it will prevent the \`Console.WriteLine\` from producing anything but if you were running this as an application it would print out the line.
\`\`\`
        try
        {
            int sum = 0;
            for (int ii = 0; ii < 1000; ii++)
            {
                checked {sum += 1_000_000_000;}
            }
        }
        catch (OverflowException ex)
        {
            // do something like log a message
            Console.WriteLine("It's all gone wrong");
        }
\`\`\`
              `
          },
        'immutability' : {
            feature : 'Favour immutability',
            category : 'discussion point',
            tezt : `
By far the most important thing is that access to the field is restricted from outside the class.  This prevents unexpected changes to the instantiated objects and avoids many gotchas for maintainers.

There is much less point in making the private field readonly.  But it is still worth it.  It helps a maintainer of the class to quickly internalise how the class behaves and what dangers there are in making changes.

For one thing, If it turns out, as in this case, that all the class's data is readonly then the maintainer knows that the class is immutable and therefore thread safe or more susceptible to being cached, for example.            `
        },
          'maturity' : {
              feature : 'When to start programming for real',
              catgory : 'discussion-point',
              text : `
That is a difficult question.

If you have the opportunity of transitioning from an existing/language to C# in the same organisation / role then you should just try that and see how it goes.

Another approach is to participate in an open source project in C#/.NET.  I work on [dasblog-core](https://github.com/poppastring/dasblog-core).

You should be aware that in many commercial roles you will need to know associated technologies, the most important of which are ASP.NET and SQL (probably SQL Server).

What we have referred to as the "maintainer approach" is more often referred to as software craftsmanship, principle based or best practice.  Examples are the Agile manifesto / Extreme Programming (SP), SOLID principles, defensive coding.  They are not specific to C#/.NET.  It has to be said that this approach may not be adhered to by as many programmers as some of us would like.
              `
          },
          'equals-idiom' : {
              feature : '== is more idiomatic',
              category : 'discussion-point',
              text : 'The `==` operator is generally considered more idiomatic than `Equals` for value types such as primitives (int, etc.)'
          },
          'plus-plus-idiom' : {
              feature : '++ is more idiomatic',
              category : 'discussion-point',
              text : 'The `++` operator is generally considered more idiomatic than `+= 1`'
          },
          'favour-read-only' : {
              feature : 'Favour read-only fields',
              category : 'discussion-point',
              text : 'You should favour read only fields where possible as is the case here'
          },
          'who-do-we-code-for' : {
              feature : 'who do we expect to mainain the code',
              category : 'discussion-point',
              text : `
Your new version is exactly what I would code.

You may be right about the trade-off.  Your original is more explicit about when the method will return true and when it will return false.

So why consider an alternative?

I would say your new/my version is more idiomatic.  Its conciseness enhances its readability to coders of my standard.  I must have seen literally 150 solutions to Leap so I may be biased.  I still think that this is the solution I would expect to see in a quality C# shop.

BTW I am not interested in conciseness unless it serves readability.

I think the question comes down to - who is our audience?  Who do we think will maintain the code?  In 40 years of coding I have not found an answer - I just assume (almost certainly wrongly) they will be coders like me.

Let me know if you come across a better answer and I (may just) be prepared to put my ego aside.
              `
          },
          'bool-literal-comparison' : {
              feature : 'Avoid comparisons with boolean literals',
              category : 'discussion-point',
              text : 'It is more idiomatic to use `if (expr) {}` than `if (expr == true) {}` and `if (!expr) {}` than `if (expr == false) {}`'
          },
          'avoid-parameter-reassignment' : {
              feature : 'Avoid reassigning parameters',
              category : 'discussion-point',
              text : 'Reassigning values to a parameter within a method is generally frowned upon.  A maintainer will generally focus on the method signature and grasp what the parameter is likely to contain.  They may be surprised if that value changes within the method'
          },
          'intro-guidance' : {
              feature : 'Use unit tests etc.',
              category : 'review-point',
              text : `
Exercises in Exercism are designed to be run by unit tests. Pay close attention to the instructions 
about running the tests, and follow the link there to the C# language page if you're running into trouble. 
Your submission is expected to return a value rather than outputting it to the console. 
Your initial download should have included a Leap.cs file with a template for you to get started with. 
Once you've got that figured out, go ahead and submit a new solution. :-)

As a consequence of this approach you cannot include \`Console.ReadLine()\` and other console read statements in the code as these "block" the execution.

Have another go or ask questions and we will take it from there
              `
          },
          'avoid-literals' : {
              feature: 'Avoid boolean literals',
              category : 'discussion-point',
              text : `
There is no requirement for a conditional statement and boolean literals.

Instead of having an if-statement and explicitly returning \`true\` or \`false\`, you could also just return the expression in the if-statement.

Consider the following two bits of code, which are functionally equivalent:
\`\`\`
if (x > 1)
{
    return true;
}

return false;
\`\`\`
and
\`\`\`
return x > 1;
\`\`\`
              `
          },
      },
  }
};




