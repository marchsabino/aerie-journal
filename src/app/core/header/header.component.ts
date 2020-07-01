import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models';
import { UserService } from 'src/app/shared/services/user.service';
import { filter, distinctUntilChanged } from 'rxjs/operators';
import {
  ActivatedRoute,
  Router,
  NavigationCancel,
  NavigationEnd,
} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  today = new Date();
  currentUser: User;
  showHeader = true;

  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  logout(): void {
    this.userService.setCurrentUser(null);
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(
          (e) => e instanceof NavigationCancel || e instanceof NavigationEnd
        ),
        distinctUntilChanged()
      )
      .subscribe(() => {
        this.showHeader =
          this.activatedRoute.firstChild.snapshot.data.showHeader !== false;
      });
    this.userService.getCurrentUser().subscribe((user) => {
      this.currentUser = user;
    });
  }
}
