import React from 'react';
import { Search } from '../../services/Search';

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