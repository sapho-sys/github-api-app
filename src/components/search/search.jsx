import React from 'react';
// import { browserHistory as history } from 'react-router';


// class Search extends React.Component {
//    constructor(props){
//     super(props);
//     this._handleEntry = this._handleEntry.bind(this);
// }
// _handleEntry(e){
//     e.preventDefault();
//     history.push(`/user/${this.ref.userInput.value}`);
// }
 
//  render(){
//     return(
//         <div class='search-page'>
//             <h2>Search for your favoured Rockstar Developer:</h2>
//             <form onSubmit={this._handleEntry}>
//                 <input ref="userInput" className='search-page_input' type='text' />
//                 <button className='search-page_button'>Search</button>
//             </form>
//         </div>
//     );
//  }
// };

// export default Search;


//new component
{/* <div>
<h1>My Hacker Stories</h1>

<InputWithLabel
  id="search"
  value={searchTerm}
  isFocused
  onInputChange={handleSearch}
>
  <strong>Search:</strong>
</InputWithLabel>

<hr />

{stories.isError && <p>Something went wrong ...</p>}

{stories.isLoading ? (
  <p>Loading ...</p>
) : (
  <List
    list={searchedStories}
    onRemoveItem={handleRemoveStory}
  />
)}
</div> */}

// const InputWithLabel = ({
//     id,
//     value,
//     type = 'text',
//     onInputChange,
//     isFocused,
//     children,
//   }) => {
//     const inputRef = React.useRef();
  
//     React.useEffect(() => {
//       if (isFocused) {
//         inputRef.current.focus();
//       }
//     }, [isFocused]);
  
//     return (
//       <>
//         <label htmlFor={id}>{children}</label>
//         &nbsp;
//         <input
//           ref={inputRef}
//           id={id}
//           type={type}
//           value={value}
//           onChange={onInputChange}
//         />
//       </>
//     );
//   };