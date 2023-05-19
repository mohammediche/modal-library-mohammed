# modal-hrnet-library

> Library of a React Modal Component for HealthWealth (OpenClassrooms project 14)

This component displays a modal in the center of the screen.

[![NPM](https://img.shields.io/npm/v/react-modal-component-library.svg)](https://www.npmjs.com/package/modal-library-mohammed)

## Install

To install this package, use the following command :

```bash
npm i modal-library-mohammed
```

## Usage

The Modal component needs 5 props :

- {closeModal} : the function to close the modal (you have to add it closing function in your file)
- {text} : the text to display in the modal
- {imageUrl} : the url of an image you want to display
- {textLink} : the text of the link
- {linkUrl} : the Url of the link

Example :

```jsx
import React, { useState } from "react";
import { ModalComponent } from "modal-library-mohammed";

function Example() {
  const [showModal, setShowModal] = useState(false);

  const imgUrl = "https://cdn-icons-png.flaticon.com/512/3789/3789820.png";
  const text = "Employee Created!";
  const textLink = "View Current Employees";
  const linkUrl = "/employee-list";

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={openModal}> Open Modal </button>
      {showModal && (
        <ModalComponent closeModal={closeModal} text={text} imageUrl={imageUrl} textLink={textLink} linkUrl={linkUrl} />
      )}
    </div>
  );
}
```
