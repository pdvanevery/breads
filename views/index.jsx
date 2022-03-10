const React = require('react')
const Default = require('./layouts/Default')

function Index (props) {
    const breads = props.breads;
    const title = props.title;
    return (
      <Default title={title}>
          <div className="newButton">
            <a href="/breads/new"><button>Add a new bread</button></a>
            </div>
          <ul>
          {breads.map((bread, index) => {
              return (
              <li key={index}>
                  <a href={`/breads/${index}`}>{bread.name}</a>
             </li>
              )
          })}
          </ul>
      </Default>
    )
}

module.exports = Index