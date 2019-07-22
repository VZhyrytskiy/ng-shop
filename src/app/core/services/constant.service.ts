import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class ConstantsService {

    public readonly App: string = 'Task Manager';
    
    public readonly Version: number = 1.0;
}
