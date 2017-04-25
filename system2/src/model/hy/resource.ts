export interface hyResource {
	id: number;
	name: string;
	previewImg: string;
	downloadCount: number;
	collection: boolean;
	createdTime: string;
	typeId: number;
	status: number;
	typeSuffix: string;

	schoolId: number;
	schoolName?: string;
	staffId: number;
	staffName?: string;
	subjectId: number;
	subjectName?: string;

}
