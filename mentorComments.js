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
          'xxx' : {
              category : 'discussion-point',
              text : `yyyy`
          }
      },
      'xxx-general' : {
          'good-solution' : {
              category : 'review-point',
              text : `Good solution`
          }
          'effective-solution' : {
              category : 'review-point',
              text : `Effective solution`
          }
      }
  }
};