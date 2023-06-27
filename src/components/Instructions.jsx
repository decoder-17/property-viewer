import React from "react";

export default function Instructions() {
  return (
    <div className="flex flex-col flex-grow h-full m-4 border-box ">
      <ul className="list-disc flex flex-col items-center text-justify p-8 rounded-2xl w-full bg-white ">
        <h1 className="text-2xl font-semibold  p-2">About</h1>
        <p className="max-w-6xl text-justify">
          Introducing the Property Viewer, a versatile project that offers an
          intuitive solution for exploring and analysing XML Schema Definition
          (XSD) and files. With the ability to accept XSD files as input, this
          project empowers users to effortlessly navigate through the intricate
          details of their XML schemas. <br />
          The Property Viewer provides a user-friendly interface where users can
          upload their XSD files with ease. Upon uploading, the project
          instantly extracts and displays crucial information about the schema,
          including data types, element definitions, attribute details, and
          more. This comprehensive overview allows users to quickly grasp the
          structure and characteristics of their XML schemas. <br />
          To delve deeper into the XSD file, users can simply click on specific
          elements or data types within the schema. This action triggers an
          interactive view that provides detailed insights, such as the
          associated documentation, restrictions, default values, and any
          applicable validation rules. This feature facilitates a comprehensive
          understanding of the XML schema and enables users to make informed
          decisions when working with XML data. <br /> The Property Viewer also
          offers the functionality to remove elements or data types directly
          from the file. With a simple click, users can eliminate unnecessary or
          outdated components, streamlining their XML schema and enhancing its
          efficiency. <br /> This project's flexibility and user-centric design
          make it an ideal tool for developers, data analysts, and XML
          enthusiasts. Whether you're working on XML-based projects,
          troubleshooting data-related issues, or simply exploring the
          intricacies of XSD files, the Property Viewer provides an invaluable
          resource for efficient and effective schema analysis.
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
