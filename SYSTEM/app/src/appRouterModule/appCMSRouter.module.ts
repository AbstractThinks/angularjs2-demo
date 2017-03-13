import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CMSComponent } from '../appCMSModule/cms.component';
import { CMSPersonalModuleComponent } from '../appCMSModule/personalModule/personal.component'
import { CMSPersonalHomepageComponent } from '../appCMSModule/personalModule/component/homepage/homepage.component';
import { CMSPersonalMessageComponent } from '../appCMSModule/personalModule/component/message/message.component';
import { CMSPersonalNewsComponent } from '../appCMSModule/personalModule/component/news/news.component';
import { CMSPersonalSendMessageComponent } from '../appCMSModule/personalModule/component/sendmessage/sendmessage.component';
import { CMSPersonalInboxComponent } from '../appCMSModule/personalModule/component/inbox/inbox.component';
import { CMSPersonalOutboxComponent } from '../appCMSModule/personalModule/component/outbox/outbox.component';
import { CMSPersonalMyDocumentsComponent } from '../appCMSModule/personalModule/component/mydocuments/mydocuments.component';
import { CMSPersonalDocumentsComponent } from '../appCMSModule/personalModule/component/documents/documents';
import { CMSPersonalDocumentsManagementComponent } from '../appCMSModule/personalModule/component/documentsmanagement/documentsmanagement.component';
import { CMSPersonalCommunicationComponent } from '../appCMSModule/personalModule/component/communication/communication.component';
import { CMSPersonalSendTextComponent } from '../appCMSModule/personalModule/component/sendtext/sendtext.component';
import { CMSPersonalTextComponent } from '../appCMSModule/personalModule/component/text/text.component';
import { CMSPersonalPasswordComponent } from '../appCMSModule/personalModule/component/password/password.component';


export const appCMSRoutes: Routes = [
    {
		path: 'cms',
		component: CMSComponent,
		children: [
			{ path: '', redirectTo: 'pernsonal',  pathMatch: 'full' },
			{
				path: 'pernsonal',
				component: CMSPersonalModuleComponent,
				children: [
					{ path: '', redirectTo: 'homepage',  pathMatch: 'full'},
					{ path: 'homepage', component: CMSPersonalHomepageComponent },
					{ path: 'message', component: CMSPersonalMessageComponent },
					{ path: 'news', component: CMSPersonalNewsComponent },
					{ path: 'sendmessage', component: CMSPersonalSendMessageComponent },
					{ path: 'inbox', component: CMSPersonalInboxComponent },
					{ path: 'outbox', component: CMSPersonalOutboxComponent },
					{ path: 'documents', component: CMSPersonalDocumentsComponent },
					{ path: 'mydocuments', component: CMSPersonalMyDocumentsComponent },
					{ path: 'documentsmanagement', component: CMSPersonalDocumentsManagementComponent },
					{ path: 'commnuication', component: CMSPersonalCommunicationComponent },
					{ path: 'sendtext', component: CMSPersonalSendTextComponent },
					{ path: 'text', component: CMSPersonalTextComponent },
					{ path: 'password', component: CMSPersonalPasswordComponent },
					
				]
		    }
		]
    }
];


