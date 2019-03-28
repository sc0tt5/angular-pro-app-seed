import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { MailService } from './../../mail.service';
import { Mail } from './../../models/mail.interface';

// this acts as middleware between component and router

@Injectable()
export class MailFolderResolve implements Resolve<Mail[]> {
    constructor(private mailService: MailService) {}
    resolve(route: ActivatedRouteSnapshot) {
        // ActivatedRouteSnapshot contains info about our current routing ..url, params, resolve data, etc.
        // RouterStateSnapshot represents state of router at this particular time this route is colled
        return this.mailService.getFolder(route.params.name); // returns resolve data here
    }
}
