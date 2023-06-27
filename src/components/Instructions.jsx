import React from "react";

export default function Instructions() {
  return (
    <div>
      <ul class="list-disc w-full flex flex-col items-center my-8 pb-4 rounded-2xl bg-white  ">
        <p class="text-lg font-light leading-relaxed m-4">
          "The project is a dynamic content display system that showcases the
          items' content, providing the ability to select and delete items from
          the list, allowing for easy updates and management of the displayed
          content."
        </p>
        <h1 className="text-2xl font-semibold  p-2">Instructions</h1>
        <li>
          To view the content of the file click on the view button of that item
          and the content will be displayed on your right.
        </li>
        <li>
          To remove any item or items from the list, you need to select the
          respective item, and then click on submit.
        </li>
        <li>
          You get a chance to confirm before permanently removing the items from
          the list. Hence, please make sure you do it correctly.
        </li>
      </ul>
    </div>
  );
}
