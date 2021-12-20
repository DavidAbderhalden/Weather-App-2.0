// user-module.ts
import {
  VuexModule, Module, Mutation, // Action,
} from 'vuex-class-modules';

import store from '@/store/index';

@Module
class UserModule extends VuexModule {
  // state
  firstName = 'Foo';

  lastName = 'Bar';

  // getters
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // mutations
  @Mutation
  setFirstName(firstName: string) {
    this.firstName = firstName;
  }

  @Mutation
  setLastName(lastName: string) {
    this.lastName = lastName;
  }

  // actions
  /*
  @Action
  async loadUser() {
    const user = await fetchUser();
    this.setFirstName(user.firstName);
    this.setLastName(user.lastName);
  }
  */
}

const userModule = new UserModule({ store, name: 'user' });

export default { userModule };
