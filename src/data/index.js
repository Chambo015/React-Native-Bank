import { MaterialCommunityIcons } from '@expo/vector-icons';
import { faker } from '@faker-js/faker';

const data = {
  actionBtns: [
    { btnName: 'bank-transfer', actionName: 'Transfer' },
    { btnName: 'file-document-outline', actionName: 'Transfer' },
    { btnName: 'cellphone', actionName: 'Recharge' },
    { btnName: 'dots-horizontal', actionName: 'More' },
  ],
  colors: {
    listBg: '#292929',
  },
  cards: [
    {
      title: 'visa',
      accountNumber: 'US594162942522995829',
      cardNumber: '5555',
      deadline: '01/24',
      id: 1,
      balance: 2200,
    },
    {
      title: 'mastercard',
      accountNumber: 'US59588000555500829',
      cardNumber: '7722',
      deadline: '04/23',
      id: 2,
      balance: 750,
    },
    {
      title: 'mastercard',
      accountNumber: 'US51111555557889522',
      cardNumber: '8585',
      deadline: '09/22',
      id: 3,
      balance: 3500,
    },
  ],
  transactions: [ ...Array(30).keys()].map((_, i) => {
    return {
      id: faker.datatype.uuid(),
      title: faker.name.fullName(),
      value: faker.random.numeric(3)
    }
  }),
    
  settings: [
    {
      icon() {
        return (
          <MaterialCommunityIcons
            name="file-document-outline"
            size={34}
            color="#DDDDDD"
            style={{ width: 52, textAlign: 'center' }}
          />
        );
      },
      title: 'View Statement',
    },
    {
      icon() {
        return (
          <MaterialCommunityIcons
            name="code-equal"
            size={34}
            color="#DDDDDD"
            style={{ width: 52, textAlign: 'center' }}
          />
        );
      },
      title: 'Change Pin',
    },
    {
      icon() {
        return (
          <MaterialCommunityIcons
            name="card-remove-outline"
            size={34}
            color="#DDDDDD"
            style={{ width: 52, textAlign: 'center' }}
          />
        );
      },
      title: 'Remove Card',
    },
  ],
};

export default data;
