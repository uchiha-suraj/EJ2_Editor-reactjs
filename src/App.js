// import './App.css';
// import * as React from 'react';
// import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-react-documenteditor';
// DocumentEditorContainerComponent.Inject(Toolbar);
// export class App extends React.Component {
//     render() {
//         return (<DocumentEditorContainerComponent id="container" height={'100vh'} serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/" enableToolbar={true}/>);
//     }
// }


// export default App

/**
 * Rich Text Editor - Insert Image Sample
 */
 import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
 import * as React from 'react';
 import './App.css';
 class App extends React.Component {
     constructor() {
         super(...arguments);
         this.toolbarSettings = {
             items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
                 'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
                 'LowerCase', 'UpperCase', '|',
                 'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
                 'Outdent', 'Indent', '|',
                 'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
                 'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
         };
         this.quickToolbarSettings = {
             image: ['Replace', 'Align', 'Caption', 'Remove', 'InsertLink', 'OpenImageLink', '-', 'EditImageLink', 'RemoveImageLink', 'Display', 'AltText', 'Dimension']
         };
     }
     render() {
        return (
        <RichTextEditorComponent 
            height={450} 
            toolbarSettings={this.toolbarSettings} 
            quickToolbarSettings={this.quickToolbarSettings}
        >
            <p>The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content.
                Users can format their content using standard toolbar commands.</p>
            <p><b>Key features:</b></p>
            <ul>
                {/* <li>
                <p>Provides <IFRAME> and <DIV> modes</p>
                </li> */}
                <li>
                <p>Capable of handling markdown editing.</p>
                </li>
                <li>
                <p>Contains a modular library to load the necessary functionality on demand.</p>
                </li>
                <li>
                <p>Provides a fully customizable toolbar.</p>
                </li>
                <li>
                <p>Provides HTML view to edit the source directly for developers.</p>
                </li>
                <li>
                <p>Supports third-party library integration.</p>
                </li>
                <li>
                <p>Allows preview of modified content before saving it.</p>
                </li>
                <li>
                <p>Handles images, hyperlinks, video, hyperlinks, uploads, etc.</p>
                </li>
                <li>
                <p>Contains undo/redo manager.</p>
                </li>
                <li>
                <p>Creates bulleted and numbered lists.</p>
                </li>
            </ul>
            <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]}/>
        </RichTextEditorComponent>);
    }
 }
 export default App;