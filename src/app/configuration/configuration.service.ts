import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ConfigurationService {
    private groupdetailSubject = new Subject<any>();
    private productListSubject = new Subject<any>();

    // items: Array<any> = [['1','2',3,4,5,6,7],[1,2,3],[1,2,3,4]];
    items: Array<any> = [["ACB_com_modules_concept_191118-02","ACB_com_modules_concept_191118-03","ACB_com_modules_concept_191118-04","ACB_com_modules_concept_191118-05","ACB_com_modules_concept_191118-06"],
                         ["ACB_com_modules_concept_191118-07","ACB_com_modules_concept_191118-08"],
                         ["ACB_com_modules_concept_191118-09","ACB_com_modules_concept_191118-10","ACB_com_modules_concept_191118-12"],
                         ["ACB_com_modules_concept_191118-12","ACB_com_modules_concept_191118-13","ACB_com_modules_concept_191118-14b","ACB_com_modules_concept_191118-15B"],
                         ["ACB_com_modules_concept_191118-15B","ACB_com_modules_concept_191118-15C","ACB_com_modules_concept_191118-15D","ACB_com_modules_concept_191118-16B"]]
    productlist : any = {
        "Interlock MV/LV": ["Interlock MV/LV List 1","Interlock MV/LV List 2","Interlock MV/LV List 3","Interlock MV/LV List 4"],
        "ZSI": ["ZSI List 1","ZSI List 2","ZSI List 3","ZSI List 4","ZSI List 5"],
        "Load Schedule": ["Load Schedule List 1","Load Schedule List 2"],
        "ATS": ["ATS List 1","ATS List 2","ATS List 3"]
    }

    parts : any = {
        "Interlock MV/LV List 1": ["ACB_com_modules_concept_191118-02","ACB_com_modules_concept_191118-03","ACB_com_modules_concept_191118-04"],
        "Interlock MV/LV List 2": ["ACB_com_modules_concept_191118-05","ACB_com_modules_concept_191118-06"],
        "Interlock MV/LV List 3": ["ACB_com_modules_concept_191118-07","ACB_com_modules_concept_191118-08"],
        "Interlock MV/LV List 4": ["ACB_com_modules_concept_191118-09","ACB_com_modules_concept_191118-10","ACB_com_modules_concept_191118-12"],

        "ZSI List 1": ["ACB_com_modules_concept_191118-12","ACB_com_modules_concept_191118-13"],
        "ZSI List 2": ["ACB_com_modules_concept_191118-14b","ACB_com_modules_concept_191118-15B"],
        "ZSI List 3": ["ACB_com_modules_concept_191118-15B"],
        "ZSI List 4": ["ACB_com_modules_concept_191118-15D",],
        "ZSI List 5": ["ACB_com_modules_concept_191118-15C","ACB_com_modules_concept_191118-15D"],

        "Load Schedule List 1": ["ACB_com_modules_concept_191118-09"],
        "Load Schedule List 2": ["ACB_com_modules_concept_191118-15B","ACB_com_modules_concept_191118-15C"],

        "ATS List 1": ["ACB_com_modules_concept_191118-08"],
        "ATS List 2": ["ACB_com_modules_concept_191118-06"],
        "ATS List 3": ["ACB_com_modules_concept_191118-10"]
    
    }

    sendGroupDetails(str: string) {
        // this.groupdetailSubject.next(this.items[index]?this.items[index]:[]);
        this.groupdetailSubject.next(this.parts[str])
    }

    sendProductListDetails(product: string) {
        this.productListSubject.next(this.productlist[product]);
    }

    clearGroup() {
        this.groupdetailSubject.next([]);
    }

    clearProductList() {
        this.productListSubject.next([]);
    }

    getGroupDetails(): Observable<any> {
        return this.groupdetailSubject.asObservable();
    }

    getProductListDetails(): Observable<any> {
        return this.productListSubject.asObservable();
    }


}