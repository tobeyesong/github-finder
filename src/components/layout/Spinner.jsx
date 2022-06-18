/** @format */

import spinner from "./assets/spinner.png";

function Spinner() {
  return (
    <div>
      <img src={spinner} alt='loading' className='w-28 h-28 animate-spin' />
    </div>
  );
}

export default Spinner;
