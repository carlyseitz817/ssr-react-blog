// const BLOCK_TAGS = {
//     blockquote: 'block-quote',
//     p: 'paragraph',
//     ul: 'bulleted-list',
//     li: 'list-item',
//     ol: 'numbered-list',
//     h1: 'heading-one',
//     h2: 'heading-two',
//     h3: 'heading-three',
//     h4: 'heading-four'
// }

// // Add a dictionary of mark tags.
// const MARK_TAGS = {
//     em: 'italic',
//     strong: 'bold',
//     u: 'underlined',
//     code: 'code'
// }

// export const rules = [
//     {
//         deserialize(el, next) {
//             const type = BLOCK_TAGS[el.tagName.toLowerCase()]
//             if (type) {
//                 return {
//                     object: 'block',
//                     type: type,
//                     nodes: next(el.childNodes),
//                 }
//             }
//         },
//         serialize(obj, children) {
//             if (obj.object == 'block') {
//                 switch (obj.type) {
//                     case 'paragraph':
//                         return <p>{children}</p>
//                     case 'block-quote':
//                         return <blockquote>{children}</blockquote>
//                     case 'bulleted-list':
//                         return <ul>{children}</ul>
//                     case 'heading-one':
//                         return <h1>{children}</h1>
//                     case 'heading-two':
//                         return <h2>{children}</h2>
//                     case 'heading-three':
//                         return <h3>{children}</h3>
//                     case 'heading-four':
//                         return <h4>{children}</h4>
//                     case 'list-item':
//                         return <li>{children}</li>
//                     case 'numbered-list':
//                         return <ol>{children}</ol>
//                 }
//             }
//         },
//     },
//     // Add a new rule that handles marks...
//     {
//         deserialize(el, next) {
//             const type = MARK_TAGS[el.tagName.toLowerCase()]
//             if (type) {
//                 return {
//                     object: 'mark',
//                     type: type,
//                     nodes: next(el.childNodes),
//                 }
//             }
//         },
//         serialize(obj, children) {
//             if (obj.object == 'mark') {
//                 switch (obj.type) {
//                     case 'bold':
//                         return <strong>{children}</strong>
//                     case 'italic':
//                         return <em>{children}</em>
//                     case 'underlined':
//                         return <u>{children}</u>
//                     case 'code':
//                         return <code>{children}</code>
//                 }
//             }
//         },
//     },
// ]

const BLOCK_TAGS = {
  blockquote: 'quote',
  p: 'paragraph',
  pre: 'code',
}

// Add a dictionary of mark tags.
const MARK_TAGS = {
  em: 'italic',
  strong: 'bold',
  u: 'underline',
}

const rules = [
  {
    deserialize(el, next) {
      const type = BLOCK_TAGS[el.tagName.toLowerCase()]
      if (type) {
        return {
          object: 'block',
          type: type,
          data: {
            className: el.getAttribute('class'),
          },
          nodes: next(el.childNodes),
        }
      }
    },
    serialize(obj, children) {
      if (obj.object == 'block') {
        switch (obj.type) {
          case 'code':
            return (
              <pre>
                <code>{children}</code>
              </pre>
            )
          case 'paragraph':
            return <p className={obj.data.get('className')}>{children}</p>
          case 'quote':
            return <blockquote>{children}</blockquote>
        }
      }
    },
  },
  // Add a new rule that handles marks...
  {
    deserialize(el, next) {
      const type = MARK_TAGS[el.tagName.toLowerCase()]
      if (type) {
        return {
          object: 'mark',
          type: type,
          nodes: next(el.childNodes),
        }
      }
    },
    serialize(obj, children) {
      if (obj.object == 'mark') {
        switch (obj.type) {
          case 'bold':
            return <strong>{children}</strong>
          case 'italic':
            return <em>{children}</em>
          case 'underline':
            return <u>{children}</u>
        }
      }
    },
  },
]

