'use client';
import { DocumentEditorContainerComponent, Toolbar, ContentControlInfo } from '@syncfusion/ej2-react-documenteditor';
import { TitleBar } from '../title-bar';
import { useEffect, useRef } from 'react';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import '../default.component.css';

DocumentEditorContainerComponent.Inject(Toolbar);
// tslint:disable:max-line-length
const BindUIToDocument = () => {
    let hostUrl: string = 'https://services.syncfusion.com/react/production/api/documenteditor/';
    let container = useRef<DocumentEditorContainerComponent>(null);
    let titleBar: TitleBar;
    let placeHolderPrefix = 'placeHolder_';
    useEffect(() => {
        window.onbeforeunload = function () {
            return 'Want to save your changes?';
        }
        container.current.showPropertiesPane = false;
        // this.container.documentEditor.pageOutline = '#E0E0E0';
        // this.container.documentEditor.acceptTab = true;
        container.current.documentEditor.resize();
        if (!titleBar) {
            titleBar = new TitleBar(document.getElementById('documenteditor_titlebar'), container.current.documentEditor, true);
        }
        setTimeout(() => {   
            onLoadDefault();
        });
    }, []);
    const settings ={showRuler: true};
    const nameBox = useRef(null);
    const dateBox = useRef(null);
    const addressBox = useRef(null);
    const phoneBox = useRef(null);
    const emailBox = useRef(null);
    let toolbarOptions: any = [
        'New',
        'Open',
        'Separator',
        'Undo',
        'Redo',
        'Separator',
        'ContentControl',
        'Separator',
        'Image',
        'Table',
        'Hyperlink',
        'Bookmark',
        'TableOfContents',
        'Separator',
        'Header',
        'Footer',
        'PageSetup',
        'PageNumber',
        'Break',
        'Separator',
        'Find',
        'Separator',
        'Comments',
        'TrackChanges',
        'Separator',
        'LocalClipboard',
        'Separator',
        'FormFields',
        'UpdateFields',
    ];

    const onLoadDefault = (): void => {
        // tslint:disable
        let defaultDocument: object = {"sfdt":"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"};

        // tslint:enable   
        container.current.documentEditor.open(JSON.stringify(defaultDocument));
        container.current.documentEditor.documentName = 'Bind Content Control Data';
        titleBar.updateDocumentTitle();
        container.current.documentChange = (): void => {
            titleBar.updateDocumentTitle();
            container.current.documentEditor.focusIn();
        };
        bindToForm();
    };
    const bindToDocument = () => {
        let bookmarkobj = {};
        const data : any = [];
        bookmarkobj['Name'] = nameBox.current.value;
        bookmarkobj['DOB'] = dateBox.current.value;
        bookmarkobj['Address'] = addressBox.current.value;
        bookmarkobj['Phone'] = phoneBox.current.value;
        bookmarkobj['Email'] = emailBox.current.value;
        if (!isNullOrUndefined(bookmarkobj['Name'])) {
            const contentControlData = { title: placeHolderPrefix + 'Name', tag: '', value: bookmarkobj['Name'], canDelete: false, canEdit: false, type: 'RichText' };
            data.push(contentControlData);
        }
        if (!isNullOrUndefined(bookmarkobj['DOB'])) {
            const contentControlData = { title: placeHolderPrefix + 'DOB', tag: '', value: bookmarkobj['DOB'], canDelete: false, canEdit: false, type: 'Date' };
            data.push(contentControlData);
        }
        if (!isNullOrUndefined(bookmarkobj['address'])) {
            const contentControlData = { title: placeHolderPrefix + 'Address', tag: '', value: bookmarkobj['Address'], canDelete: false, canEdit: false, type: 'RichText' };
            data.push(contentControlData);
        }
        if (!isNullOrUndefined(bookmarkobj['Phone'])) {
            const contentControlData = { title: placeHolderPrefix + 'Phone', tag: '', value: bookmarkobj['Phone'], canDelete: false, canEdit: false, type: 'RichText' };
            data.push(contentControlData);
        }
        if (!isNullOrUndefined(bookmarkobj['Email'])) {
            const contentControlData = { title: placeHolderPrefix + 'Email', tag: '', value: bookmarkobj['Email'], canDelete: false, canEdit: false, type: 'RichText' };
            data.push(contentControlData);
        }
        container.current.documentEditor.importContentControlData(data);
    };
    const bindToForm = () => {
        let contentControlInfos = container.current.documentEditor.exportContentControlData();
        if(contentControlInfos.length > 0) {
        for (let i = 0; i < contentControlInfos.length; i++){
            if (!isNullOrUndefined(contentControlInfos[i].title) && contentControlInfos[i].title.indexOf('Name') > -1) {
                nameBox.current.value = contentControlInfos[i].value;
              }
              if (!isNullOrUndefined(contentControlInfos[i].title) && contentControlInfos[i].title.indexOf('DOB') > -1) {
                dateBox.current.value = contentControlInfos[i].value;
              }
              if (!isNullOrUndefined(contentControlInfos[i].title) && contentControlInfos[i].title.indexOf('Address') > -1) {
                addressBox.current.value = contentControlInfos[i].value;
              }
              if (!isNullOrUndefined(contentControlInfos[i].title) && contentControlInfos[i].title.indexOf('Phone') > -1) {
                phoneBox.current.value = contentControlInfos[i].value;
              }
              if (!isNullOrUndefined(contentControlInfos[i].title) && contentControlInfos[i].title.indexOf('Email') > -1) {
                emailBox.current.value = contentControlInfos[i].value;
              }
        }
        }
    };
    return (<div className='control-pane'>
            <div className="col-lg-9 control-section">
                <div id='documenteditor_titlebar' className="e-de-ctn-title"></div>
                <div id="documenteditor_container_body">
                    <DocumentEditorContainerComponent 
                        id="container"
                        ref={container}
                        style={{ display: 'block' }}
                        height={'590px'} 
                        serviceUrl={hostUrl} 
                        enableToolbar={true} 
                        locale='en-US'
                        toolbarItems={toolbarOptions} 
                    />
                </div>
            </div>
            <div className="col-lg-3 property-section">
                <div className="content-wrapper sb-content-tab-header">
                <div className="property-panel-header">Form UI</div>
                    <div>
                        <TextBoxComponent id = "firstName" ref={nameBox} placeholder = "Name" floatLabelType = "Auto" />
                    </div>
                    <div style={{marginTop: '20px',marginBottom: '0px'}}>
                        <TextBoxComponent id = "birthDate"  ref ={dateBox} placeholder = "Date[DD/MM/YYYY]" floatLabelType = "Auto" />
                    </div>
                    <div style={{marginTop: '20px',marginBottom: '0px'}}>
                        <TextBoxComponent  id = "address"  ref={addressBox} placeholder = "Address" floatLabelType = "Auto" />
                    </div>
                    <div style={{marginTop: '20px',marginBottom: '0px'}}>
                        <TextBoxComponent  id = "phone" ref={phoneBox} placeholder = "Phone" floatLabelType = "Auto" />
                    </div>
                    <div style={{marginTop: '20px',marginBottom: '20px'}}>
                        <TextBoxComponent  id = "email" ref={emailBox} placeholder = "Email" floatLabelType = "Auto" />
                    </div>
                     </div>
                    <div className="content-wrapper">
                        <div style={{marginTop: '20px',marginRight: '10px', marginBottom: '10px',marginLeft: '0px'}} >
                            <ButtonComponent  id="BindToDocument" onClick={bindToDocument.bind(this)}>
                                Bind Form UI Data To Document
                            </ButtonComponent>
                        </div>
                        <div style={{marginTop: '10px', marginBottom: '0px'}} >
                            <ButtonComponent  id="BindToForm" onClick={bindToForm.bind(this)}>
                                Bind Document Data To Form UI
                            </ButtonComponent>
                        </div>
                    </div>
            </div>
            <div id="defaultDialog"></div>
            <div id="action-description">
                <p>This example showcases how to retrieve content control data from a document and subsequently import data into it.</p>
            </div>
            <div id="description">
                <p>Content controls are individual controls that users can add and customize for use in templates, forms, and documents.</p>
                    <ul>
                        <li>Rich Text: Format and manage rich text with ease, allowing for bold, italic, and underlined text, among
                            other formatting options. This control provides a rich editing experience, making your documents more
                            dynamic and visually appealing.</li>
                        <li>Plain Text: Insert and edit plain text effortlessly, ensuring a clean and straightforward document layout.
                            Ideal for simple text entries without the need for complex formatting.</li>
                        <li>Dropdown List: Create and customize dropdown menus to streamline user input and enhance form functionality.
                            This control simplifies data entry by providing predefined options for users to choose from.</li>
                        <li>Combobox: Combine text input and dropdown options to offer flexible user interaction. Users can either
                            select from a list of predefined choices or enter their own text, increasing versatility.</li>
                        <li>Date Picker: Select and insert dates with an intuitive picker, reducing the chances of formatting errors.
                            This control makes date entry quick and consistent across your documents.</li>
                        <li>Check Box: Add check boxes for easy task tracking and selection, perfect for creating lists and forms. Users
                            can quickly mark items as completed, improving document interactivity.</li>
                        <li>Image: Insert and manage images seamlessly, enhancing the visual appeal of your documents. This control
                            supports various image formats and allows for easy resizing and positioning.</li>
                    </ul>
                    <p style={{ 'display': 'block' }}> More information about the document editor features can be found in this <a target="_blank" href="https://ej2.syncfusion.com/react/documentation/document-editor/content-control">documentation section.</a>
                    </p>
            </div>
        </div>);

}
export default BindUIToDocument;