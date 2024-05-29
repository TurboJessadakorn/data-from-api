import { transformData } from '../src/transform';
import { User } from '../src/types';

const mockUsers: User[] = [
    {
        id: 1,
        firstName: 'Emily',
        lastName: 'Johnson',
        age: 28,
        gender: 'female',
        hair: { color: 'Brown' },
        address: { postalCode: '29112' },
        company: { department: 'Engineering' }
    },
    {
        id: 2,
        firstName: 'Michael',
        lastName: 'Williams',
        age: 35,
        gender: 'male',
        hair: { color: 'Green' },
        address: { postalCode: '38807' },
        company: { department: 'Support' }
    }
];

describe('transformData', () => {
    it('should transform user data correctly', () => {
        const result = transformData(mockUsers);
        expect(result).toEqual({
            Engineering: {
                male: 0,
                female: 1,
                ageRange: '28-28',
                hair: {
                    Brown: 1
                },
                addressUser: {
                    EmilyJohnson: '29112'
                }
            },
            Support: {
                male: 1,
                female: 0,
                ageRange: '35-35',
                hair: {
                    Green: 1
                },
                addressUser: {
                    MichaelWilliams: '38807'
                }
            }
        });
    });
});
