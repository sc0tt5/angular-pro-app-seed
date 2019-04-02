import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { MailService } from '../../mail.service';
import { Mail } from '../../models/mail.interface';

@Injectable()
export class MailFolderResolve implements Resolve<Mail[]> {
    constructor(private mailService: MailService) {}
    resolve(route: ActivatedRouteSnapshot) {
        return this.mailService.getFolder(route.params.name);
    }
}
