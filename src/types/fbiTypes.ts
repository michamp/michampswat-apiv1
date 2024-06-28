// FBI Interfaces

// FBI Types 
export type FbiFileType =
{
	name:string;
	url:string;

};

export type FbiCoordinateType = 
{
	lat:number;
	formatted:string;
	lng:number;

};

export type FbiImageType =
{
	original:string;
	thumb:string;
	large:string;
	caption:string;
};

export type FbiType =
{
			dates_of_birth_used:Array<String>;
			place_of_birth:string;
			reward_text:string;
			poster_classification:string;
      	uid:string;
			possible_states:Array<String>;
      	sex:string;
      	details:string;
      	scars_and_marks:string;
			images:Array<FbiImageType>;
        	reward_min:number;
      	age_max:number;
      	warning_message:string;
      	weight:string;
      	person_classification:string;
      	url:string;
      	ncic:string;
      	race_raw:string;
        	weight_max:number;
        	nationality:string;
        	suspects:string;
        	remarks:string;
      	race:string;
        	height_max:number;
      	coordinates:Array<FbiCoordinateType>;
      	title:string;
      	aliases:Array<String>;
      	eyes:string;
      	publication:string;
      	age_range:string;
      	eyes_raw:string;
        	caution:string;
      	path:string;
      	complexion:string;
      	hair_raw:string;
      	legat_names:string;
      	modified:string;
      	locations:string;
      	hair:string;
      	age_min:number;
      	languages:Array<String>;
        	status:string;
      	field_offices:Array<String>;
        	files:Array<FbiFileType>;
        	subjects:Array<String>;
      	possible_countries:Array<String>;
      	occupations:Array<String>;
      	build:string;
      	height_min:number;
      	weight_min:number;
      	reward_max:number;
      	additional_information:string;
      	description:string;
      	id:string;
};



