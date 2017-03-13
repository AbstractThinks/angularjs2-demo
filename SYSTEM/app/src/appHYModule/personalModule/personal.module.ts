import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgSemanticModule } from "ng-semantic";
import { StickyNavModule } from 'ng2-sticky-nav';
import { AppPublicModule } from '../../appPublicModule/appPublic.module';

import { CMSPersonalModuleComponent } from './personal.component';
import { CMSPersonalHomepageComponent } from './component/homepage/homepage.component';
import { CMSPersonalMessageComponent } from './component/message/message.component';
import { CMSPersonalNewsComponent } from './component/news/news.component';
import { CMSPersonalSendMessageComponent } from './component/sendmessage/sendmessage.component';
import { CMSPersonalInboxComponent } from './component/inbox/inbox.component';
import { CMSPersonalOutboxComponent } from './component/outbox/outbox.component';
import { CMSPersonalMyDocumentsComponent } from './component/mydocuments/mydocuments.component';
import { CMSPersonalDocumentsComponent } from './component/documents/documents';
import { CMSPersonalDocumentsManagementComponent } from './component/documentsmanagement/documentsmanagement.component';
import { CMSPersonalCommunicationComponent } from './component/communication/communication.component';
import { CMSPersonalSendTextComponent } from './component/sendtext/sendtext.component';
import { CMSPersonalTextComponent } from './component/text/text.component';
import { CMSPersonalPasswordComponent } from './component/password/password.component';

const APP_CMS_COMPONENT = [
	CMSPersonalModuleComponent,
	CMSPersonalHomepageComponent,
	CMSPersonalMessageComponent,
	CMSPersonalNewsComponent,
	CMSPersonalSendMessageComponent,
	CMSPersonalInboxComponent,
	CMSPersonalOutboxComponent,
	CMSPersonalMyDocumentsComponent,
	CMSPersonalDocumentsComponent,
	CMSPersonalDocumentsManagementComponent,
	CMSPersonalCommunicationComponent,
	CMSPersonalSendTextComponent,
	CMSPersonalTextComponent,
	CMSPersonalPasswordComponent,

]
const APP_CMS_IMPORT = [
	FormsModule,
	RouterModule,
	CommonModule,
	NgSemanticModule,
	StickyNavModule,
	AppPublicModule,
]

@NgModule({
	imports: [
        ...APP_CMS_IMPORT
	],
    declarations: [
    	...APP_CMS_COMPONENT
    ],
})
export class appCMSPersonalModule {}
