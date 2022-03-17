const React = require('react')
const Default = require('./layouts/Default')

function Show ({bread, index}) {
  console.log(bread)
  console.log(index)
    return (
      <Default>
        <h3>{bread.name}</h3>
        <form action={`/breads/${index}?_method=DELETE`} method="POST">
          <input type='submit' value="DELETE"/>
        </form>
        <a href={`/breads/${index}/edit`}><button>Edit</button></a>
        <p>
            and it 
            {
                bread.hasGluten
                ? <span> does </span>
                : <span> does NOT </span>
            }
            have gluten.
        </p>
        <h4>Ingredients:</h4>
        <ul>
        {bread.ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>
        )} 
        </ul>
        <img src={bread.image} alt={bread.name} />
        <li><a href='/breads'>Go home</a></li>
      </Default>
    )
}

module.exports = Show