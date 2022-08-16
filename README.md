# FirstAngularRepository
my angular project  for recipe and shopping website

my new project coming

new project

The template defines the layout and content of the View. Without the template,  there is nothing for Angular to render to the DOM.

The Templates are nothing but HTML codes along with the Angular specific special HTML markups ( knows as the Angular Template Syntax).

You can add Angular directives , Angular Pipes & Other Angular Components on the template.

The data to Template comes from the Component, which in turn gets it from a Angular Service. Using the data binding techniques, we can keep the Template in sync with the Component. The templates can use the Event Binding or two way data binding to notify the component, when user changes something on the View.

There are two ways you can specify the Template in Angular.

Defining the Template Inline
Provide an external Template
Class


This tutorial is a continuation, of the tutorial Create Your First Angular Application. You can download the source code from the GitHub Repository.  The starting code is found under the folder Getting Started and final source code is in the folder Components

Table of Contents

What is an Angular Component
Building blocks of the Angular Components
Template (View)
Class
Metadata
@Component decorator
Important Component metadata properties
Creating the Component
1. Creating the Component File
2. Import the Angular Component Library
3. Create the Component Class and export it
4. Add @Component decorator
5. Add meta data to @Component decorator
selector
templateUrl
styleUrls
6. Create the Template (View)
7. Add the Styles
8. Register the Angular Component in Angular Module
Creating the inline Template & StyleUrls
The Component selector
Using the CSS class name
Using attribute name
Using attribute name and value
Summary
What is an Angular Component
The Component is the main building block of an Angular Application.

The Component contains the data & user interaction logic that defines how the View looks and behaves. A view in Angular refers to a template (HTML).

The Angular Components are plain JavaScript classes and defined using @Component Decorator. This Decorator provides the component with the View to display & Metadata about the Component

The Component is responsible to provide the data to the view. The Angular does this by using data binding to get the data from the Component to the View. This is done using the special HTML markup knows as the Angular Template Syntax. The Component can also get notified when the View Changes.

The Angular applications will have lots of components. Each component handles a small part of UI. These components work together to produce the complete user interface of the application

The Components consists of three main building blocks

Template
Class
MetaData
Building Blocks of Angular Component Template, Metadata and Class
Building blocks of the Angular Components
Template (View)
The template defines the layout and content of the View. Without the template,  there is nothing for Angular to render to the DOM.

The Templates are nothing but HTML codes along with the Angular specific special HTML markups ( knows as the Angular Template Syntax).

You can add Angular directives , Angular Pipes & Other Angular Components on the template.

The data to Template comes from the Component, which in turn gets it from a Angular Service. Using the data binding techniques, we can keep the Template in sync with the Component. The templates can use the Event Binding or two way data binding to notify the component, when user changes something on the View.

There are two ways you can specify the Template in Angular.

Defining the Template Inline
Provide an external Template
Class
The Class provides the data & logic to the View. It contains the JavaScript code associated with Template (View). We use TypeScript to create the class, but you can also use JavaScript directly in the class.

Class Contains the Properties & Methods. The Properties of a class can be bind to the view using Data Binding.

The simple Angular Class

1
2
3
4
5
6
 
export class AppComponent
{
    title : string ="app"
}
 
By convention we prefix the Component class with Component so as to easily identify them.

Metadata
Metadata Provides additional information about the component to the Angular. Angular uses this information to process the class. We use the @Component decorator to provide the Metadata to the Component.

@Component decorator
A decorator is a function that adds metadata to class, its methods & to its properties. The Components are defined with a @Component class decorator.

When Angular sees a class with @Component decorator, it treats the class as Component.

A Decorator is always prefixed with @. We must place the Decorator immediately before the class definition. We can also build our own decorators. The decorators are Similar to attributes in C#

Important Component metadata properties
Selector
Selector specifies the simple CSS selector. The Angular looks for the CSS selector in the template and renders the component there.

Providers
The Providers are the Angular Services, that our component going to use. The Services provide service to the Components or to the other Services.

Directives
The directives that this component going to use are listed here.

Styles/styleUrls
The CSS styles or style sheets, that this component needs. Here we can use either external stylesheet (using styleUrls) or inline styles (using Styles). The styles used here are specific to the component

template/templateUrl
The HTML template that defines our View. It tells Angular how to render the Component’s view. The templates can be inline (using a template) or we can use an external template (using a templateUrl). The Component can have only one template. You can either use inline template or external template and not both

Creating the Component
We have already shown how to create the Angular Application using Angular CLI in how to create first Angular application tutorial.  The Angular CLI has automatically created the root component app.component.ts.

In this tutorial, we will not create the Angular Component, but let us see the Component creation process in detail. The creation of the Angular component requires you to follow these steps

Create the Component file
Import the required external Classes/Functions
Create the Component class and export it
Add @Component decorator
Add metadata to @Component decorator
Create the Template
Create the CSS Styles
Register the Component in Angular Module
1. Creating the Component File
The Component app.component.ts. is already been created for us by Angular CLI under the folder src.

By Convention, the file name starts with the feature name (app) and then followed by the type of class (component). These are separated by a dot. The extension used is ts indicating that this is a typescript module file.

You can read more about naming conventions from the Angular Style Guide

2. Import the Angular Component Library
Before we use any Angular (or external) functions or classes, we need to tell Angular how and where to find it. This is done using the Import statement. The Import statement is similar to the using statement in c#, which allows us to use the external modules in our class

To define the Component class, we need to use the @Component decorator. This function is part of the Angular Core library. So we import it in our class as shown below
