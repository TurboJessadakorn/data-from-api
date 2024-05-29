import { User, TransformedData } from './types';

export const transformData = (users: User[]): TransformedData => {
    const data: TransformedData = {};

    users.forEach(user => {
        const department = user.company.department;
        if (!data[department]) {
            data[department] = {
                male: 0,
                female: 0,
                ageRange: '',
                hair: {},
                addressUser: {}
            };
        }

        data[department][user.gender]++;
        
        const hairColor = user.hair.color;
        if (!data[department].hair[hairColor]) {
            data[department].hair[hairColor] = 0;
        }
        data[department].hair[hairColor]++;
        
        data[department].addressUser[`${user.firstName}${user.lastName}`] = user.address.postalCode;
    });

    // Calculate age ranges
    for (const department in data) {
        const ages = users.filter(user => user.company.department === department).map(user => user.age);
        const minAge = Math.min(...ages);
        const maxAge = Math.max(...ages);
        data[department].ageRange = `${minAge}-${maxAge}`;
    }

    return data;
};
