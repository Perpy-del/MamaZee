export interface IAddress {
    country: string;
    firstName: string;
    lastName: string;
    company: string;
    address: string;
    city: string;
    state: string;
    postalCode: string;
    phoneNumber: string;
    setAsDefault: boolean;
}

export const data: IAddress[] = [
    {
        country: 'United States',
        firstName: 'John',
        lastName: 'Smith',
        company: 'Google Inc',
        address: '1600 Amphitheatre Parkway, Cambridge',
        city: 'Washington',
        state: 'Washington',
        postalCode: '94045',
        phoneNumber: '123-456-789',
        setAsDefault: false
    },
    {
        country: 'Nigeria',
        firstName: 'Abraham',
        lastName: 'Ayoola',
        company: 'Relic Inc',
        address: 'Abdulsalam second gate. Alao Akala Estate',
        city: 'IBADAN-AKOBO',
        state: 'Oyo',
        postalCode: '112102',
        phoneNumber: '+234 7030887642',
        setAsDefault: true
    },
]