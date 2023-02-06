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
 
 render(){
    return(
        <div>
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
</div> 
    );
 }
};

// export default Search;


//new component
{ <div>
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
</div> }

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