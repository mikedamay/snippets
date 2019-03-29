export const text = {
  exercises : {
      twofer : {
          'null-coalescence' : {
              feature : 'Suggest null coalescence',
              category : 'discussion-point',
              text : `* null coalescence operator \`var expr = "something or nothing"; var default_val = "nothing"; var foo = expr ?? default_val;\``
          },
          'string-interpolation' : {
              feature : 'Suggest string interpolation',
              category: 'discussion-point',
              text: `* string interpolation \`var expr = "abc"; var foo = $"this is {expr}";\``,
          },
          'suggest-default-parameter' : {
              feature : 'Suggest default parameter',
              category: 'discussion-point',
              text : `* default parameter can be something other than null - \`void foo(string bar = "you"){}\``
          },
          'default-parameter' : {
              feature : 'Default parameter used',
              category: 'discussion-point',
              text : `The solution does not address the case of an empty string being passed in`
          },
      },
      leap : {
          'xxx' : {
              category : 'discussion-point',
              text : `yyyy`
          }
      },
      gigasecond :  {
          'thousands-separator' : {
              feature: 'Suggest thousands separator _',
              category : 'discussion-point',
              text : `C# provides a 'thousands' separator '_', as in \`1_000_000_000\` which improves readability`
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
              feature : 'The read only dictionary is a good thing',
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
          'linq-available' : {
              feature : 'LINQ methods',
              category : 'review-point',
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
      },
      'hamming' : {
          'performance-comparison' : {
              feature : 'Performance Comparison',
              category : 'discussion-point',
              text : `
There are two obvious LINQ approaches - \`IEnumerable.Zip()\` 
and one based around \`IEnumerble.SelectMany()\` (or one that accesses
the second strand by index in some other way).  The "Zip" approach takes
twice as long as the indexed approach (but less LINQy).  A typical
non-LINQ approach is about 3 times the speed of "Zip".         
                  `
          }
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

      }
  }
};




