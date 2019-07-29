import { TestBed ,inject, fakeAsync} from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Observable } from 'rxjs';

import { AuthServiceService } from './auth-service.service';
import { HttpClientModule , HttpClient} from '@angular/common/http';

const testConfig = {

  addUser: {
    positive: {
      firstName: 'test',
      lastName: 'testLast',
      userId: 'testUser',
      password: 'testPass'
    }
  },

  loginUser: {
    positive: {
      firstName: '',
      lastName: '',
      userId: 'testUser',
      password: 'testPass'
    }
  }
}


fdescribe('AuthServiceService', () => {
  let authService : AuthServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({

      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [AuthServiceService]
    });
    authService = TestBed.get(AuthServiceService);

  });

  it('should be created Auth Service', 
   inject([AuthServiceService], (service: AuthServiceService) => {
    expect(service).toBeTruthy();
  }));

  it('should register user data', fakeAsync(() => {
    let data = testConfig.addUser.positive;
    inject([AuthServiceService, HttpTestingController], (backend: HttpTestingController) => {
      const mockReq = backend.expectOne(authService.springEndPoint);
      expect(mockReq.request.url).toEqual(authService.springEndPoint, 'request url should match with json server api url');
      expect(mockReq.request.method).toBe('POST', 'Should handle requested method type');
      mockReq.flush(data);
      backend.verify();
    });
    authService.registerUser(data).subscribe((res: any) => {
      expect(res).toBeDefined();
      expect(res._body).toBe(data, 'data should be same');
    });
  }));

  it('should login user', fakeAsync(() => {
    let userData = testConfig.loginUser.positive;
    inject([AuthServiceService, HttpTestingController], (backend: HttpTestingController) => {
      const mockReq = backend.expectOne(authService.springEndPoint);
      expect(mockReq.request.url).toEqual(authService.springEndPoint, 'request url should match with json server api url');
      expect(mockReq.request.method).toBe('POST', 'Should handle requested method type');
      mockReq.flush(userData);
      backend.verify();
    });
    authService.loginUser(userData).subscribe((res: any) => {
      expect(res).toBeDefined();
      expect(res._body).toBe(userData, 'data should be same');
    });
  }));

});
