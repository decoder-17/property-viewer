import React from "react";

export default function Instructions() {
  return (
    <div className="flex flex-col flex-grow h-full my-4 mx-8 border-box ">
      <div className="flex flex-col p-8 rounded-3xl w-full bg-white items-center ">
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
        <p className="max-w-6xl text-justify">
          This innovative tool offers two distinct options for converting files,
          catering to different user preferences and requirements. <br />{" "}
          <b>Option 1: Automated Conversion</b> <br /> In the first option, the
          Automated RAML Converter streamlines the conversion process by
          automatically converting .ear or .xsd files to RAML format. Users can
          simply upload their files, and the tool will handle the conversion
          behind the scenes. This seamless and efficient approach eliminates the
          need for manual intervention, saving users valuable time and effort.{" "}
          <br />
          <b>Option 2: Manual Modification</b> <br /> For users who require
          greater control and flexibility over the conversion process, the
          Customizable RAML Converter offers a tailored solution. In this
          option, users have the ability to modify their file selections before
          submitting them for conversion. The project provides an intuitive
          interface where users can review the uploaded .ear or .xsd files, make
          desired adjustments or exclusions, and then proceed with the
          conversion to RAML. This option empowers users to fine-tune the
          conversion based on their specific needs, ensuring optimal results.{" "}
          <br /> Both options of the RAML Converter utilize sophisticated
          algorithms and parsing techniques to accurately interpret the contents
          of .ear or .xsd files and generate corresponding RAML representations.
          The converted RAML files retain the essential structural and semantic
          elements, enabling users to seamlessly transition their applications
          or APIs to RAML-based architectures. <br /> With the Automated and
          Customizable RAML Converter, users can leverage the power of RAML for
          efficient API modeling, documentation, and integration. This project
          simplifies the conversion process, eliminating manual efforts and
          enabling users to embrace RAML's advantages in a streamlined and
          user-friendly manner. <br />
          <b>Instruction to manually intervene the modification process:</b>
          <ul className="list-disc mx-6 mt-3 mb-6 flex flex-col">
            <li>
              To view the content of the file click on the view button of that
              item and the content will be displayed on your right.
            </li>
            <li>
              To remove any item or items from the list, you need to select the
              respective item, and then click on submit.
            </li>
            <li>
              You get a chance to confirm before permanently removing the items
              from the list. Hence, please make sure you do it correctly.
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
}
