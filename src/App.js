import React, { useState } from "react";


import { TodoProvider } from './TodoContext/index';
import { AppUI } from './AppUi';


function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
