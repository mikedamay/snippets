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
          'is-null-or-whitespace' : {
              feature : 'Consider `IsNullOrWhiteSpace`',
              category: 'discussion-point',
              text: 'Have a look at `string.IsNullOrWhiteSpace()`. It might work better for you'
          },
          'suggest-you' : {
              feature : 'Suggest "you" as default parameter',
              category: 'discussion-point',
              text : `You may want to consider default parameter can be something other than null - \`void foo(string bar = "you"){}\``
          },
          'suggest-default-parameter' : {
              feature : 'Suggest default parameter',
              category: 'discussion-point',
              text : `You may want to consider the use of a default parameter (optional argument with a default value) which will allow you to use a single overload of \`Speak()\``
          },
          'default-parameter' : {
              feature : 'Default parameter used',
              category: 'discussion-point',
              text : `The solution does not address the case of an empty string being passed in.  What steps might you take to address that?`
          },
          'non-var-expression' : {
              feature : 'Expressions, not just variables',
              category: 'discussion-point',
              text : 'String interpolation can handle any expression not just single variables, e.g. \` $\"my name is {firstName + " " + lastName}\"\`'
          },
          'meaningful-identifier' : {
              feature : 'More Meaningful Identifier',
              category: 'discussion-point',
              text : 'Try to choose a more meaningful identifier.  If you are in doubt, it is appropriate to use an identifier from your first language.  I will catch on.\n'
          },
          'more-generalised' : {
              feature : 'More Generalised Solution',
              category: 'review-point',
              text : `
Try something more generalised - have a look at the following and decide which you prefer:
* string concatenation: \`"abc" + "def"\`.  This works for literals like "abc" and for variables like \`Name\`
* \`string.Format\`
* string interpolation
              
              `
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

Let me know (by commenting on this solution page) if you need further halp.
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
              text : 'The correct result will be produced without parentheses.  Operator precedence works in your favour.  You may want to have parentheses for readability but it\'s more important to know about their effect on performance (known as short-circuiting.  If the sub expression `|| year % 400 == 0` is not coupled with `year % 100 != 0` then it will always execute even in the typically majority case when `year %4 == 0` is false and further calculation is pointless.'
          },
          'no-intermediates' : {
              feature: 'No Intermediates',
              category : 'discussion-point',
              text : 'Seasoned CSharp developers would probably not bother with the intermediate variables and simply evaluate all three components of the expression in the return statement.'
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
              category : 'mentor-preference',
              text : `
It's arguable that the solution should show an explicit mapping between name and numeric value for each color as, according to [Wikipedia](https://en.wikipedia.org/wiki/Electronic_color_code#Resistor_color-coding), the numeric values have quantitative significance in calculating resistance.

Two approaches that provide such explicitness are a dictionary of color name to integer and an enum with specified values.

Two approaches that, whilst being adequate, hide the relationship between color and numeric value are an array of colors and an enum without specified values.

Examples of these 4 contrasting approaches are shown below:
\`\`\`
// Explicit mappings
    static readonly IReadOnlyDictionary<string, int> colorMap = new Dictionary<string, int>{
        {"black", 0},        
        {"brown",1},
        {"red", 2} // ...
    };
// OR
    private enum Color : byte
    {
        black = 0,
        brown = 1,
        red = 2  // ...
    }
// BUT NOT
    static string[] colorArr = {"black", "brown", "red" /* ... */};
// NOR
    private enum Color2 : byte
    {
        black,
        brown,
        red  // ...
    }
\`\`\`
Being explicit can be useful for maintainers groking the code; for example in relating the code to a a design document or a spec.

[This](https://blog.rust-lang.org/2017/03/02/lang-ergonomics.html#implicit-vs-explicit) throws some light on the advantages of being explicit.

Perhaps the winning approach is to start with the enum (with specified values) which is simple and concise and refactor code to introduce the dictionary when requirements added complexity - say localisation was required. 
                            
              `
          },
          'readonly-dictionary-present' : {
              feature : 'Acknowledge that the read only dictionary is a good thing',
              category : 'discussion-point',
              text : `Making the dictionary read only, as you have, keeps maintainers on the right track`
          },
          'suggest-clone-array' : {
              feature : 'Color array should be cloned',
              category : 'discussion-point',
              text : `The color array is returned by the \`Colors()\` method.  This will give the caller an opportunity to change the behaviour of the \`ResistorColor\` method without using the standard API.  Do you care about this bypassing of the API and, if so, what can you do about it?`
          },
          'switch-present' : {
              feature : 'Learner is using a switch statement',
              category : 'discussion-point',
              text : `Consider a read only, initialised dictionary as an alternative to the switch statement`
          },
          'ro-dictionary' : {
              feature : 'Make dictionary read only',
              category : 'mentor-preference',
              text : `Consider making the dictionary a readonly collection.  It providesa strong hint to maintainers about how the dictionary is being used`
          },
          'index-of' : {
              feature : 'Suggest Array.IndexOf',
              category : 'discussion-point',
              text : 'You can use `Array.IndexOf` to convert color names to their equivalent value'
          },
          'avoid-repetition' : {
              feature : 'Avoid Repetition of Color Array',
              category : 'review-point',
              text : 'Try to find a way to avoid repeating the  color names'
          },
          'enum-defined' : {
              feature : 'Enum - Consider Enum.IsDefined',
              category : 'discussion-point',
              text : 'Consider `Enum.isDefined()` to detect invalid colors passed to `ColorCode()`'
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
                category : 'mentor-preference',
                text : 'Making the dictionary read only (rather than just the field reference) would keep maintainers on the right track'
            },
            'suggest-enums' : {
                feature : 'enums rather than strings for planet names',
                category : 'discussion-point',
                text : 'Using an enum rather than strings for planet names would avoid the possibility of bugs being introduced by typos.  Or maybe a static class with a set of appropriately named `const` values.\n'
            },
            'use-constant' : {
                feature : 'make number of seconds a constant',
                category : 'review-point',
                text : 'The number of seconds in an earth year would be better as a named constant to avoid the possibility of typos and to provide a little documentation.\n'
            },
            'gather-constants' : {
                feature : 'Suggest that year lengths are more readable in a bunch',
                category : 'mentor-preference',
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
              category : 'mentor-preference',
              text : 'The instructions provide the number of seconds in an earth year.  If we see the instructions as a sort of stand-in for the business rules then it might make more sense to reflect this back in the code in the form of a well named constant or even a comment referring back to the requirements documentation rather than calculate the value.'
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
              text : `As it stands the class's explicit API can be by-passed by a caller manipulating the list after it has been passed into the constructor or when it is returned from \`Scores()\`.  Do you think that this is a problem worth worrying about and if so how would you address it?`
          },
          'undersccores' : {
              feature : 'Consider _ => _',
              category : 'discussion-point',
              text : 'I came across `OrderByDescending( _ => _)` recently which I liked'
          },
          'take' : {
              feature : 'Take handles fewer elements',
              category : 'review-point',
              text : 'You don\'t have to check on the list size when using `Take()`.  If there are fewer than 3 elements it will return the actual number of elements.'
          },
          'favoured-soluton' : {
              feature : 'Favoured Solution',
              category : 'mentor-preference',
              text : 'n the absence of any guidance about performance requirements I favour using a single list and simple LINQ expressions as it makes the code so easy to read.'
          },
          'avoid-mutable' : {
              feature : 'Avoid Mutable Object',
              category : 'discussion-point',
              text : `
But you need to find a way of sorting and selecting that does not touch \`_Scores\` as the results will be altered when multiple calls are made to \`Latest()\` and \`PersonalTopThree\`.

Have a look at the LINQ methods, \`OrderBy(Descending(), Take(), Last()\` etc.
              `
          },
      },
      'hamming' : {
          'performance-comparison' : {
              feature : 'Performance Comparison',
              category : 'discussion-point',
              text : `
There are two obvious LINQ approaches - \`Enumerable.Zip()\` 
and one based around \`Enumerable.Select()\` (or one that accesses
the second strand by index in some other way).  The "Zip" approach takes
twice as long as the indexed approach.  A typical
non-LINQ approach is about 3 times the speed of "Zip".  

Zip is more LINQy than the other approach as it can work entirely with \`IEnumerable\`.  No indexer required.       
                  `
          },
          'linq-possibility' : {
              feature : 'LINQ is an option',
              category : 'discussion-point',
              text : 'I\'m happy to discus a LINQ based solution with you if that is of interest.'
          },
          'linq-approaches' : {
              feature : 'LINQ approaches',
              category : 'discussion-point',
              text : `
There are two obvious LINQ approaches - \`Enumerable.Zip()\` 
and one based around \`Enumerable.Select()\` (or one that accesses
the second strand by index in some other way).  

The above approaches are a little more complicated than a simple \`collectio.Where(..).Select(...)\` structure which is the basis of LINQ.  If you've used LINQ at all then the \`Enumerable.Select\` approach may be easiest to navigate.  Simply remember that there is an overload of \`Select\` that takes two parameters where the second is an index into the source collection.

If you haven't used LINQ before then I imagine both the \`Enumerable.Select\` and \`Enumerable.Zip\` approaches will be equally challenging.  You may in fact be better off starting with a more straight forward exercise such as high-scores.

The "Zip" approach takes
twice as long as the indexed approach.  A typical
non-LINQ approach is about 3 times the speed of "Zip".  

Zip is more LINQy than the other approach as it can work entirely with \`IEnumerable\`.  No indexer required.              
`
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
          'read-only' : {
              feature : 'Buffer array can be readonly',
              category : 'discussion-point',
              text : 'Your buffer array can be a `readonly` field'
          },
      },
      'nucleotide-count' : {
          'suggest-ro-dict' : {
              feature : 'Suggest that the dictionary should be read only',
              category : 'mentor-preference',
              text : `
You could consider returning a read only version 
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
          'avoid-repetition' : {
              feature : 'Avoid Repeating ACGT',
              category : 'discussion-point',
              text : 'It would be good to find a way not to repeat A, C, G and T.  The synthetic biologists are working on new ones so it would be good to have a slightly more maintainable approach.'
          },
          'single-expression-dictionary' : {
              feature : 'Dictionary Constructed in a Single Expression',
              category : 'mentor-preference',
              text : 'I tend to avoid solutions where there is something closer to my mental model of the problem that can be coded.  Adding the four letters at the start and subtraction 1 from the count in each is ingenious but would give a maintainer (if they did not, in contrast to me, happen to have seen a couple of hundred of these before) pause for thought and there is an argument for saying that the approach may be avoided.'
          },
          'avoid-switch' : {
              feature : 'Avoid Switch Statement',
              category : 'review-point',
              text : 'Try to use the lookup facilities of the dictionary rather than a switch statement.\n'
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
              category : 'mentor-preference',
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
          'encapsulate-name-gen' : {
              feature : 'Encapsulate Name Generation',
              category : 'review-point',
              text : 'It might make the code clearer to encapsulate the generation of an individual name in its own method.\n'
          },
          'recursive-solution' : {
              feature : 'Recursive Solution Problematic',
              category : 'review-point',
              text : 'A recursive solution will probably cause a stack overflow exception for a large number of robots.  This is best avoided.\n'
          },
          'using-100' : {
              feature : 'The number component starts at 100',
              category : 'review-point',
              text : `Using \`100\` as the starting number means that you reduce the number of possible names by 2,600.  Have a look at some approaches that will help with this:
* \`Int32.ToString()\` which takes a format string.
* or better: \`string.Format()\`
* or still better: string interpolation
`
          },
          'flawed-requirements' : {
              feature : 'Address the flawed requirements',
              category : 'discussion-point',
              text : `
How do we handle hundreds of thousands of robots?

The simple (and admittedly flawed) solution is to check on the number of names in the robot collection and reject an attempt to add names when the limit of 26 * 26 * 1000 has been reached.

The requirements are problematic.  Generating names in this way randomly is not sensible as the program might have to make hundreds of thousands of attempts before it found a "free slot".  The processing cost would be too great

An alternative approach, if you do not care about memory usage and start up time, is to generate all the names at the start, sort them into a random order and then keep a counter as to which has been used.  You then have the question of handling reset robots.  

Perhaps compromise is to impose a limit of a few thousand robots.  If the client complains you can point out the shortcomings of their requirements.          
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
You can then use \`Enum.HasFlag()\` and \`Enum.GetValues()\` to implement the methods.
              `
          },
          'get-values' : {
              feature : 'GetValues+Cast is avaialble',
              category : 'discussion-point',
              text : 'You can use `Enum.GetValues()` together with `IEnumerable.Cast<Allergen>` to build a LINQ expression that will return a list of values.\n'
          },
          'has-flag' : {
              feature : 'Use HasFlag() with Flags',
              category : 'review-point',
              text : 'You could make use of `Enum.HasFlag()` in `IsAllergicTo()`'
          },
      },
      'grade-school' : {
          'simple-solution' : {
              feature : 'Simple LINQ solution',
              category : 'mentor-preference',
              text : 'There are many ways to address this problem.  If you believe that Read performance is not an issue then the code can be simplified by having a list of name+grade and using LINQ routines to order and report on that.'
          },
          'no-dictionaries' : {
              feature : 'Avoid dictionary of list',
              category : 'mentor-preference',
              text : 'Arguably a simpler solution would be to maintain a single list of students (where each student was tuple or an object containing name and grade).  You could then use `OrderBy()` and `Where()` to sort and filter at the point of reporting.  Does this approach appeal to you, at all?'
          },
          'list-of-tuples' : {
              feature : 'Favour List of Tuples if Dictiobary not Used',
              category : 'discussion-point',
              text : 'Perhaps implementing the collection as a dictionary rather than say a list of tuples will give the maintainer pause to wonder what "dictionary-lookup-stuff" is happening - and there is none.  Maybe it\'s clearer with tuples.'
          },
          'performance-anxiety' : {
              feature : 'Performance Anxiety Preventing Simple Solution',
              category : 'discussion-point',
              text : 'Unless you are particularly concerned about performance you can write a more straight forward LINQ based solution using a `List<(int grade, string student)>` structure.'
          },
      },
      'rotational-cipher' : {
          'unicode' : {
              feature: 'Take a consistent position on unicode',
              category: 'discussion-point',
              text: 'Note that `Char`\'s methods like `IsLetter(), IsUpper(), IsLower()` apply to unicode characters not just ASCII'
          },
          'string-linq' : {
              feature: 'No need for char array',
              category: 'discussion-point',
              text: 'There is no requirement to convert the string to an array as it implements `IEnumerable<char>`'
          },
          'literal-ints' : {
              feature : 'don\'t use ASCII codes',
              category : 'discussion-point',
              text : 'Rather than expressing letters with their ascii value you can use their literal value, e.g. `int minChar = \'A\'` rather than `int minChar = 65`'
          },
          'string-builder' : {
              feature : 'Favour a StringBuilder',
              category : 'discussion-point',
              text : 'For performance reasons you should favour using a StringBuilder object over string concatenation'
          },
          'string-builder-good' : {
              feature : 'Well done, selecting StringBuilder',
              category : 'review-point',
              text : 'Well done for selecting a `StringBuilder`.  This is a good choice when assembling strings'
          },
          'linq-approach' : {
              feature : 'LINQ Approach',
              category : 'mentor-preference',
              text : 'Have a look at some of the LINQ approaches in the starred community solutions.  You may not find them as readable as yours but avoiding mutable variables makes them easier to reason about (once you have deciphered them) and less likely to trip up unsuspecting maintainers.'
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
          'read-only' : {
              feature : 'Read-Only',
              category : 'review-point',
              text : 'This is a case where it is particularly important to mark fields as `readonly`.  This is generally good discipline but where fields are being used to make a hash code (as they are indirectly, here) it is vital that they cannot change for a given object (otherwise you would lose track of its position in a dictionary or hash set).  There is of course there is no way to stop a future maintainer from messing up the code but you should do your best to remind them of constraints where possible.\n'
          },
          'interpolation-format' : {
              feature : 'Format within Interpolation',
              category : 'review-point',
              text : 'You can use formatting characters with string interpolation, "{expr:00}" or "{expr:D2}"'
          },
          'immutability' : {
              feature : 'Fields must be read-only',
              category : 'review-point',
              text : 'One thing you could do is make hours and minutes `readonly`.  This is generally good practice as it cuts down the number of things maintainers have to think about when reasoning bout the code.  In this case it is particularly important as the fields are used in the calculation of the hash code and therefore need to be immutable.  You might even add a comment to the fields to that effect.'
          },
          'string-format' : {
              feature : 'String Format',
              category : 'review-point',
              text : 'For `ToString()` you can use `string.Format()` with the formatting string `D2`.'
          },
          'equality' : {
              feature : 'The Equality story',
              category : 'review-point',
              text : `
When it comes to testing equality you're expected to follow a particular pattern (similar to the notorious one in Java).

if you provide an \`Equals()\` method you are expected as well to provide another \`Equals()\` overload, a short cut specifically for objects of this type (see protected overload in the sample code below) to honour \`System.object\`'s contract for \`Equals()\`.

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
 4. \`protected...Equals(...)\` is for performance
 5. GetHashCode() and the need for consistency with Equals are a bit more hazy. The hashcode is used, in particular, by dictionaries and sets and the bumping with a random number apparently spreads out the distribution in whatever tree structure they use. I suspect 5 minutes of introspection or web search would reveal the importance of equality in this mix.  If you think that the absence of a dictionary let's you off this requirement then you are setting future maintainers up for failure as they will probably expect a hash code accompanying the \`Equals()\`.

A final "nasty" here is \`hours\` and \`minutes\` must be immutable as they are used in the hashcode so the fields need to be \`readonly\`
 
Let me know if you have any points to discuss on this. 
              
              `
          },
          'equality2' : {
              feature : 'Equality (value equality present)',
              category : 'discussion-point',
              text : `
Equality of clocks works well for your solution.

You have correctly chosen to compare values rather than relying on \`object.Equals()\`.

However C# coders (like Java developers) implementing \`Equals()\` are strongly encouraged to add 2 methods [for the sake of future maintainers](https://stackoverflow.com/questions/371328/why-is-it-important-to-override-gethashcode-when-equals-method-is-overridden).  

- [override \`object.Equals\`](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/statements-expressions-operators/equality-comparisons), typically calling into your typed version of \`Equals()\` but possibly checking for null arguments, type mismatches, and short-circuiting where the 2 arguments point at the same instance.
- override [\`object.GetHashCode()\`](https://docs.microsoft.com/en-us/dotnet/api/system.object.gethashcode?view=netcore-3.1).

IDEs like Visual Studio and Rider will generate the members for you.

The need for this boilerplate can be avoided by making \`Clock\` a \`struct\` as equality testing is built-in for a simple object like this

If you need further details on the _how_ or _why_ of the above drop a note here.              
              `
          },

      },
      bob : {
          'ends-with' : {
              feature : 'EndsWith exists',
              category : 'discussion-point',
              text : '`string.EndsWith()` is an idiomatic way of finding the final character '
          },
          'elegant-approach' : {
              feature : 'Elegant Approach',
              category : 'discussion-point',
              text : `There are only 4 characteristics of the statement that you care about:
* Does it contain an uppercase letter?
* Does it contain a lower case letter?
* Is it entirely made up of whitespace?
* Is the last non-space character a '?'?

Not sure about the exclamation mark, '!' the tests don't push it.

The following may be useful:

*    \`string.Any(Char.IsUpper)\`
*    \`string.Any(Char.IsLower)\`
*    \`string.IsNullOrWhiteSpace()\`


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
      'acronym' : {
          'string-builder' : {
              feature : 'Use StringBuilder',
              category : 'review-point',
              text : 'You would be expected to use a `StringBuilder` rather than string concatenation to build the result acronym for better perfarmance.  Even though it might not make any difference here (or conceivably impair performance slightly) the best policy to use a StringBuilder as it fulfills maintainers\' expectations.  I am happy to discuss this slightly confusing point further.'
          },
          'split-overload' : {
              feature : 'Another Overload for Split',
              category : 'review-point',
              text : '`string.Split()` has an overload that will help you simplify the code a little.'
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
              feature: 'left shift',
              category: 'discussion-point',
              text: 'The bitwise operator left shift \`<<\` is a performant approach to powers of 2'
          },
      },
      'isbn-verification' : {
          'alternatives' : {
              feature: 'Alternatives',
              category: 'discussion-point',
              text: `
Some alternatives to consider:
- Validate in one shot with a complex regex
- use \`string.Replace\` to remove '-'
- use \`Enumerable.Range\` instead of using loops
              `
          },
      },
      'isogram' : {
          'isletter' : {
              feature: 'Char.IsLetter',
              category: 'discussion-point',
              text: '`Char.IsLetter` is worth considering'
          },
          'suggest-linq' : {
              feature: 'Suggest LINQ',
              category: 'discussion-point',
              text: 'You might want to think about a LINQ based solution (or you might not see the point in which case let me know).  Use of `Distinct()` or `GroupBy()` indicate two different ways to approach this.'
          },
          'immutable' : {
              feature: 'Favour Immutability',
              category: 'mentor-preference',
              text: 'Given a choice I favour immutable solutions (let me know if you are not comfortable with this concept).  These present less work to the maintainer when reasoning about the code (they don\'t have to keep track of a changing variable).'
          },
          'group-by' : {
              feature: 'Group By',
              category: 'discussion-point',
              text: 'An alternative LINQ approach uses `GroupBy`'
          },
          'distinct' : {
              feature: 'Distinct',
              category: 'discussion-point',
              text: 'An alternative LINQ approach uses `Distinct`'
          },
          'hashset' : {
              feature: 'HashSet',
              category: 'discussion-point',
              text: '`HashSet` is the best sort of collection for accumulating data to test for uniqueness.  It is purpose built and efficient'
          },
      },
      'meetup' : {
          'suggest-linq' : {
              feature: 'Suggest LINQ',
              category: 'discussion-point',
              text: 'I am happy to discuss a LINQ solution.  It can make the code cleaner but possibly at the expense of perfornance.'
          },
      },
      'pangram' : {
          'suggest-linq': {
              feature: 'Suggest LINQ',
              category: 'discussion-point',
              text: 'You might want to think about a LINQ based solution (or you might not see the point in which case let me know). `IEnumerable.All` plus `string.Contains` is one approach or `IEnumerable.Except` plus `IEnumerable.Any`.  There are some other approaches.'
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
          'literal-ints' : {
              feature : 'don\'t use ASCII codes',
              category : 'discussion-point',
              text : 'Rather than expressing letters with their ascii value you can use their literal value, e.g.. \n' +
                  '`for ( int asciinum = \'A\'; asciinum <= \'Z\' ; asciinum  += 1)`\n'
          },
          'linq-alternatives' : {
              feature: 'LINQ alternatives',
              category: 'discussion-point',
              text: `
Some possible LINQ approaches are:
* \`IEnumerable.Except()\` plus \`IEnumerable.Any()\`
* \`IEnumerable.All()\` plus \`string.Contains()()\`
* \`IEnumerable.GroupBy()\`
* \`IEnumerable.Distinct()\` plus \`IEnumerable.Count()\`

              `
          },
          'immutable-approach' : {
              feature: 'Immutable Approach',
              category: 'mentor-preference',
              text: `
You are using a mutable collection - \`xxxxx\`.  This makes reasoning about the code more difficult for the maintainer.  They have to keep track of the changing state of the collection.  In general (I appreciate the current case is trivial so it does not matter other than for coding discipline) it is beneficial to investigate immutable approaches.  In this case you could try driving the loop from an array of alphabetic ascii characters or you could consider a LINQ approach - for which see the top starred community solution. `
          },

      },
      'perfect-numbers' : {
          'square-over-2' : {
              feature : 'Use Square Root rather than divide by 2',
              category : 'discussion-point',
              text : 'Dividing the number by 2 is a big performance win when calculating factors but using the square root would improve it further.  You will have to add both the divisor and the quotient as factors rather than just the divisor'
          },
          'square-root' : {
              feature : 'Use Square Root rather than number',
              category : 'discussion-point',
              text : 'More of a maths point than C# but when calculating the factors you can stop when you reach the square root of the original number.  You will have to add both the divisor and the quotient as factors rather than just the divisor'
          },
      },
      'parallel-letter-frequency' : {
          'performance' : {
              feature : 'Performance',
              category : 'discussion-point',
              text : `
For the anthems \`Parallel.Foreach\` together with a \`ConcurrentDictionary\` considerably out performs LINQ based solutions.  At least according to my unscientific testing.  The story may be different for the short "abc" strings.
`
          },
      },
      'phone-number' : {
          'linq' : {
              feature : 'LINQ',
              category : 'discussion-point',
              text : 'If you would like to investigate a LINQ based solution I am happy to help'
          },
          'regex' : {
              feature : 'Regex',
              category : 'discussion-point',
              text : 'Life can be made simple with a regex string  `@"^1?([2-9]\\d\\d[2-9]\\d{6})$"` if you think that is maintainable'
          },
          'fun' : {
              feature : 'Fun with LINQ or Regex',
              category : 'discussion-point',
              text : 'You can solve this problem with two statements using regex or LINQ if either of those sound interesting.'
          },
      },
      'pythagorean-triplets' : {
          'maths' : {
              feature : 'Maths',
              category : 'discussion-point',
              text : 'This is beyond my rudimentary maths as well.  I have seen solutions (actually a LINQ solution) which limits the outer loop to `sum / 3` and the inner loop to `sum / 2`.  It\'s not immediately obvious to me why and I haven\'t given it much thought.  In addition, I think the inner loop only needs to start from where the outer loop is at - or something like that.  As I say - no mathematical insights.'
          },
          'yield-return' : {
              feature : 'Use Yield Return',
              category : 'discussion-point',
              text : 'From a csharp point of view you could consider using `yield return`.  I don\'t imagine we will have a huge number of triplets but it\'s good discipline to avoid unnecessary list building. '
          },
      },
      'reverse-string' : {
          'use-sb' : {
              feature : 'Use StringBuilder',
              category : 'review-point',
              text : 'For performance reasons you should use a StringBuilder to construct the output string'
          },
      },
      'rational-numbers' : {
          'expression-bodied-members' : {
              feature : 'Use Expression Bodied Members',
              category : 'discussion-point',
              text : 'It might be beneficial to try and code the operations as expression bodied members.  They suit this sort of problem where there are multiple similar but distinct methods.'
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
          'under-used-dictionary' : {
              feature : 'Under Used Dictionary',
              category : 'discussion-point',
              text : `
You do not use the facilities of the dictionary.  It would probably be easier for the maintainer to grasp the code if you had a list of tuple(Letter_list, score) as they would not be wondering what the point of the dictionary is.

Alternatively you could rejig your key value pairs and take advantage of the dictionary's direct lookup capability.              
              `
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
      'series' : {
          'linq' : {
              feature: 'LINQ',
              category: 'discussion-point',
              text: 'If you want to assess the value of a LINQ based solution I am happy to discuss.  Just comment here'
          },
          'sub-string' : {
              feature: 'SubString',
              category: 'discussion-point',
              text: '`string.SubString()` is worth considering'
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
              text : `
The trick is to examine the inputs one at a time.  For each input you can see which numbers between 0 and \`max\` are multiples of that input.  But you don't have to check every number between 0 and \`max\` only those that are multiples of the input!  

You will have to find a way that avoids integer overflow.              
`
          },
          'checked' : {
              feature : 'Checked',
              category : 'discussion-point',
              text : `
but when talking about overflow you should be aware of the keyword [\`checked\`](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/checked).
`
          },
          'unsatisfactory' : {
              feature : 'Unsatisfactory',
              category : 'discussion-point',
              text : `
The exercise is slightly unsatisfactory in that a 
performant bulletproof solution (i.e. one that can handle all combinations of inputs) is not possible 
without changing the signature of \`Sum\`to return a 
long and a radical change to the algorithm to pre-
calculate where results would be duplicated.`
          },
      },
      'strain' : {
          'bcl' : {
              feature : '.NET Base Class Library',
              category : 'review-point',
              text : `
Have a look at the.NET Class Library source (see links below).  There's a bunch of null checking which I don't think we need to bother with for our purposes.  There is some interesting  optimisation to avoid executing the predicate once all items have been skipped/taken.  This is definitely a case if you are MS where you have to worry about performance.

Let me know if you have queries about the source.

see [skip](https://referencesource.microsoft.com/#System.Core/System/Linq/Enumerable.cs,90ccdbd47b57182e) line 647

see [Take](https://referencesource.microsoft.com/#System.Core/System/Linq/Enumerable.cs,28936f7582207b50) line 605              `
          },
          'performance-teaser' : {
              feature: 'Performance Teaser',
              category: 'review-point',
              text: `
I am happy to sign off but you might want to have a go at optimising this assuming in each case that the predicate is an expensive operation I will review your approach.  This sort of library routine is the sort of case where performance is paramount.          },
`
          },
      },
      'wordy' : {
          'regex' : {
              feature: 'Regex',
              category: 'discussion-point',
              text: 'Regular expressions are popular amongst the community solutions'
          },
          'dictionary' : {
              feature: 'Dictionary',
              category: 'discussion-point',
              text: 'A dictionary mapping strings captured by regex to lambdas is an elegant approach'
          },

          'state-machine' : {
              feature: 'State Machine',
              category: 'mentor-preference',
              text: `
My preference is to use split to break up the input string and then a state machine to parse it and take appropriate actions

A state machine may not be the most readable code but maintaining it is a fairly mechanical
process once you get your head round what's going on.

I am guided partly by certainty that complex regex would be a maintenance night mare for me
and the suspicion that it would be similarly challenging for all the biggest brains (and they should be working 
on some4thing more important, anyway.

              `
          },
      },
      'xxx-general' : {
          'good-solution' : {
              feature : 'A Good Solution',
              category : 'assessment',
              text : `Good solution`
          },
          'effective-solution' : {
              feature : 'An Effective Solution',
              category : 'assessment',
              text : `Effective solution`
          },
          'limited-solution' : {
              feature : 'A Limited Solution',
              category : 'assessment',
              text : `This is an effective solution as far as it goes`
          },
          'invitation' : {
              feature : 'Modify, argue or query',
              category : 'end-point',
              text : `Feel free to argue, modify or raise questions.`
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
          'string-tochararray' : {
              feature: 'string.ToCharArray is not necessary',
              category: 'discussion-point',
              text: 'You don\'t have to use `string.ToCharArray()` if you only want to read the string.  It implements an indexer for direct access to characters and `IEnumerable<char>` for LINQ contexts'
          },
          'string-builder' : {
              feature: 'StringBuilder',
              category: 'discussion-point',
              text: 'If you are constructing strings then `StringBuilder` is more performant than string concatenation (for all practical purposes)'
          },
          'equals' : {
              feature: '== is more idiomatic than Equals()',
              category: 'discussion-point',
              text: '`==` is more idiomatic than `Equals()` for primitives (int, bool, double...), strings and structs'
          },
          'decision-criteria' : {
              feature : 'screed on principle based coding',
              dont_publish : true,
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

Tool-ready code (starting with no warnings)

Compile time
`
          },
          'expression-bodied-present' : {
              feature : "Expression bodied members work well here",
              category : 'review-point',
              text : `Your expression bodied members work well in this solution`
          },
          'suggest-expression-bodied' : {
              feature : "Suggest expression bodied members ",
              dont_publish : true,
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
              dont_publish : true,
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
            category : 'discussion-point',
            text : `
By far the most important thing is that access to the field is restricted from outside the class.  This prevents unexpected changes to the instantiated objects and avoids many gotchas for maintainers.

There is much less point in making the private field readonly.  But it is still worth it.  It helps a maintainer of the class to quickly internalise how the class behaves and what dangers there are in making changes.

For one thing, If it turns out, as in this case, that all the class's data is readonly then the maintainer knows that the class is immutable and therefore thread safe or more susceptible to being cached, for example.            `
        },
          'maturity' : {
              feature : 'When to start programming for real',
              dont_publish : true,
              category : 'discussion-point',
              text : `
That is a difficult question.

If you have the opportunity of transitioning from an existing/language to C# in the same organisation / role then you should just try that and see how it goes.

Another approach is to participate in an open source project in C#/.NET.  I work on [dasblog-core](https://github.com/poppastring/dasblog-core).

You should be aware that in many commercial roles you will need to know associated technologies, the most important of which are ASP.NET and SQL (probably SQL Server).

What we have referred to as the "maintainer approach" is more often referred to as software craftsmanship, principle based or best practice.  Examples are the Agile manifesto / Extreme Programming (SP), SOLID principles, defensive coding.  They are not specific to C#/.NET.  It has to be said that this approach may not be adhered to by as many programmers as some of us would like.
              `
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
          'favour-const' : {
              feature : 'Const vs. Static ReadOnly',
              dont_publish : true,
              category : 'discussion-point',
              text : '`const` is more idiomatic than an initialised `static readonly` field.'
          },
          'who-do-we-code-for' : {
              feature : 'who do we expect to mainain the code',
              dont_publish : true,
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
          'remove-throw' : {
              feature : 'Remove throw',
              dont_publish : true,
              category : 'review-point',
              text : 'Remove `throw new NotImplementedException...`.  It will never be executed'
          },
          'community-solutions' : {
              feature : 'Look at Community Solutions',
              category : 'discussion-point',
              text : 'Have a look at the starred community solutions for some alternative approaches'
          },
          'algorithm-heavy' : {
              feature : 'Algorithms are Key in more complex exercises',
              category : 'discussion-point',
              text : 'These more complex exercises, at least on the C# track, are less about language idioms and library features than algorithms where abstract reasoning and CS technique are central.  A long-winded way of saying that I don\'t have much to say.  Have a look at the starred community solutions for some elegant approaches. '
          },
          'initialise-dictionary' : {
              feature : 'Dictionary Initialisation',
              category : 'discussion-point',
              text : `
You can initialise the dictionary with:
\`\`\`
var dict = new Dictionary<key, value>{ {key1, value1}, Okey2, value2}...};
\`\`\`              
              `
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
          'extra-tests' : {
              feature : 'Extra Tests',
              category : 'discussion-point',
              text : `
if you add tests you can use the following approach (which means you don't have to upload the test file and mentors don't have to worry about them).

In the source file in your case TwoFer.cs append something like the following after the final closing curly bracket (my example is from HighScores):
\`\`\`
namespace MyTests 
{    
    using System.Collections.Generic;
    using Xunit;

    public class MyTests
    {
        [Fact(Skip = "")]
        public void Personal_best()
        {
            Assert.Throws<InvalidOperationException>(
                () =>
                {
                    var sut = new HighScores(new List<int> { }).PersonalBest();
                });
        }
    }
    
}
\`\`\`      

Note that normally it is not good practice to include tests in the same files as functional code.        
              `
          },    // extra-tests
          Convert_field_to_const : {
              feature : 'An initialised field (often `private static`) is used where a `const` is appropriate',
              category : 'auto-mentor',
              text : `Consider converting the \`%{name}\` field to a \`const\`, as the value is intended never to change. Using constants is not only more common, there are also some subtle differences between a \`const\` and a \`field\`, which are explained in [this StackOverflow post](https://stackoverflow.com/questions/755685/static-readonly-vs-const#755693).`
          },
          convert_variable_to_const : {
              feature : 'An initialised variable is used where `const` is appropriate',
              category : 'auto-mentor',
              text : `Consider converting the \`%{name}\` variable to a \`const\`, as the value is intended never to change. Usually, \`const\` values are defined at the class level, as they are frequently used in multiple methods. In this case, the \`const\` value can be defined within the method itself, which means that other methods cannot use its value.`
          },
          do_not_assign_and_return : {
              feature : 'A value has been assigned to a variable which has been immediately returned',
              category : 'auto-mentor',
              text : `Consider returning the value directly instead of storing it into an intermediate value and then returning it.`
          },
          no_writeline : {
              feature : 'WriteLine does not produce any output',
              category : 'discussion-point',
              text : `The failure of \`WriteLine\` to produce output is a characteristic of xunit, the testing library, not the IDE.  xunit runs tests by default in parallel and suppresses calls to \`WriteLine\` as they are not thread safe.  Actually, tests are run in parallel only if there is more than one test module but it does not add complexity by handling the non-parallel case differently.  [https://xunit.net/docs/capturing-output](https://xunit.net/docs/capturing-output)`
          },
          do_not_use_nested_if_statement : {
              feature : 'Deeply nested if statements',
              category : 'auto-mentor',
              text : `Try rewriting the if-statements to avoid deep nesting, as it can lead to code that is harder to follow. Consider the following two pieces of code:

\`\`\`csharp
void PrintName(Person p)
{
    if (p != null)
    {
        if (p.Name != null)
        {
            if (p.Age >= 21)
            {
                Console.WriteLine(p.Name);
            }
        }
    }
}
\`\`\`

Compare that to the following code:

\`\`\`csharp
void PrintName(Person p)
{
  if (p == null || p.Name == null || p.Age < 21)
  {
      return;
  }

  Console.WriteLine(p.Name);
}
\`\`\`

The second example has a very specific structure: all paths that are dealing with errors are dealt with in indented blocks, whereas the "happy path" is always leftmost aligned. This makes for very easy reading, as one can quickly see what is the most common, error-free path through the code.
`
          },
          do_not_write_to_console : {
              feature : 'Submission contains a `Console.WriteLine` or similar',
              category : 'auto-mentor',
              text : `Try removing the method(s) that write to the console, as the tests don't require them and they make the code slightly harder to read.

Usually, these statements are added to help debug the code. However, a better approach is to debug the code while running one or more unit tests. This has the added advantage that one can focus on debugging a specific test case. Here are some links that explain how to debug C# code while running unit tests in various IDE's:

- [Visual Studio](https://docs.microsoft.com/en-us/visualstudio/test/run-unit-tests-with-test-explorer?view=vs-2019)
- [VS Code](https://github.com/OmniSharp/omnisharp-vscode/wiki/How-to-run-and-debug-unit-tests)
- [Rider](https://www.jetbrains.com/help/rider/Unit_Testing__Index.html)
`
          },
          has_compile_errors : {
              feature : 'Build failure',
              category : 'auto-mentor',
              text : `The code has one or more compile errors, which prevents the test suite from running. A good first step in finding out how to fix the error(s) is to examine the error messages displayed when trying to compile the code. These error messages contain an error number and description, which helps pinpoint what the exact problem is.`
          },
          has_main_method : {
              feature : 'Submission includes `Main` method',
              category : 'auto-mentor',
              text : `Try removing the \`Main\` method from code, as the tests don't require them and they make the code slightly harder to read.

Usually, the \`Main\` method is added to help debug the code. However, a better approach is to debug the code while running one or more unit tests. This has the added advantage that one can focus on debugging a specific test case. Here are some links that explain how to debug C# code while running unit tests in various IDE's:

- [Visual Studio](https://docs.microsoft.com/en-us/visualstudio/test/run-unit-tests-with-test-explorer?view=vs-2019)
- [VS Code](https://github.com/OmniSharp/omnisharp-vscode/wiki/How-to-run-and-debug-unit-tests)
- [Rider](https://www.jetbrains.com/help/rider/Unit_Testing__Index.html)
`
          },
          remove_throw_not_implemented_exception : {
              feature : 'Mentee has not removed throw statement',
              category : 'auto-mentor',
              text : `Try removing the \`throw new NotImplementedException\` code, which either causes one or more tests to fail, or is in a part of the code that is never reached.`
          },
          use_expression_bodied_member : {
              feature : 'Good case for expression bodied members',
              category : 'auto-mentor',
              text : `As the \`%{name}\` method only has a single statement, consider converting the method to an [expression-bodied method](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/statements-expressions-operators/expression-bodied-members#methods).`
          },
          use_null_coalescing_operator_not_null_check : {
              feature : 'Good case for null coalescence',
              category : 'auto-mentor',
              text : `Use the [null-coalescing operator](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/null-coalescing-operator) to simplify your code, rather than explicitly checking for a value to equal \`null\` and then doing something with it.`
          },
          use_private_visibility : {
              feature : 'Members are public without good reason',
              category : 'auto-mentor',
              text : `As the \`%{name}\` field is only used within its class, its visibility can, and almost always should, be set to \`private\`. Public declaration increases the amount of noise in the API and constrains maintainers who may want to change the implementation.`
          },
          use_string_interpolation_not_string_concatenation : {
              feature : 'Submission contains string concatenation',
              category : 'auto-mentor',
              text : `Use [string interpolation](https://csharp.net-tutorials.com/operators/the-string-interpolation-operator/) to dynamically build a string, rather than using string concatenation. The main benefit is less "noise"; whereas string concatenation requires \`+\` to be added between each string, string interpolation has no such limitation. As a result, string interpolation code is usually a bit easier to read.`
          },
          use_string_interpolation_not_string_format : {
              feature : 'Submission contains `string.Format`',
              category : 'auto-mentor',
              text : `A more common approach in C# is to use [string interpolation](https://csharp.net-tutorials.com/operators/the-string-interpolation-operator/), rather than using \`string.Format\` to dynamically build a string.

Note that string interpolation is just a compiler trick, also known as syntactic sugar. This means that when a string interpolation expression is compiled, the compiler will actually convert it to a \`string.Format\` call. The benefit of using string interpolation is thus purely visual.
`
          },
      },    // xxx-general
  } // exercises
};  // text




