import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { EMPTY, of } from "rxjs";
import { UserService } from "./user.service";
import { UsersComponent } from "./users.component";

describe('UsersComponent', () => {

    let component: UsersComponent;
    let service: UserService;

    let USERS = [
        {
            id: 1,
            name: 'Filip',
            surname: 'Jamalov'
        },
        {
            id: 2,
            name: 'Stefan',
            surname: 'Daskalov'
        },
        {
            id: 3,
            name: 'Marko',
            surname: 'Krstevski'
        }
    ];

    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [UserService],
          });
        service = TestBed.get(UserService);
        component = new UsersComponent(service);
    })

    it('should set user properties in component with the users retrieved from the service', () => {
        spyOn(service, 'getUsers').and.returnValue(of(USERS));

        component.ngOnInit();

        expect(component.users).toBe(USERS);
    })


    describe('Deleting a user', () => {

        let user = USERS[0];

        beforeEach(()=>{
            component.users = USERS
        })

        it('should successfully delete the given user from the list', () => {
            spyOn(service, 'deleteUser').and.returnValue(EMPTY)
    
            component.deleteUser(user);
    
            expect(component.users.indexOf(user)).toBe(-1);
        })

    })


})