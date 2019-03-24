export const text = {
  exercises : {
      twofer : {
          'null-coalescence' : {
              category : 'discussion-point',
              text : `* null coalescence operator \`var expr = "something or nothing"; var default_val = "nothing"; var foo = expr ?? default_val;\``
          },
          'string-interpolation' : {
              category: 'discussion-point',
              text: ` string interpolation \`var expr = "abc"; var foo = $"this is {expr}";\``,
          },
          'default-parameter' : {
              category: 'discussion-point',
              text : `* default parameter can be something other than null - \`void foo(string bar = "you"){}\``
          }
      },
      leap : {
          'xxx' : {
              category : 'discussion-point',
              text : `yyyy`
          }
      },
      gigascond :  {
          'xxx' : {
              category : 'discussion-point',
              text : `yyyy`
          }

      },
      'resistor-color' : {
          'dictionary' : {
              category : 'discussion-point',
              text : `Another approach is to use an array of colors`
          },
          'color-array' : {
              category : 'discussion-point',
              text : `Another approach is to use a dictionary`
          }
      },
      'xxx-general' : {
          'good-solution' : {
              category : 'review-point',
              text : `Good solution`
          },
          'effective-solution' : {
              category : 'review-point',
              text : `Effective solution`
          },
          'limited-solution' : {
              category : 'review-point',
              text : `This is an effective solution as far as it goes`
          },
          'invitation' : {
              category : 'end-point',
              text : `Please modify, argue or query as seems appropriate`
          },
          'promised-sign-off' : {
              category : 'end-point',
              text : `Please modify, argue or query as seems appropriate and I will sign off`
          },
          'empty-string' : {
              category : 'discussion-point',
              text : `\`string.Empty\` is an idiomatic alternative to \`""\``
          },
          'decision-criteria' : {
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
          }
      }
  }
};




