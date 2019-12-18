import { DO_VOTE } from '../actions/services';

export interface Service {
    key: string;
    name: string;
    votes: number;
    logo: string;
}

const initialState: Array<Service> = [
    {
        key: 'google',
        name: 'Google',
        votes: 9,
        logo: 'https://www.gstatic.com/youtube/img/promos/growth/ytr_lp2_icon_feature_musicapp_168x168.png'
    },
    {
        key: 'spotify',
        name: 'Spotify',
        votes: 7,
        logo: 'https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png'
    },
    {
        key: 'pandora',
        name: 'Pandora',
        votes: 3,
        logo: 'https://www.billboard.com/files/media/pandora-logo-new-2016-billboard-1548.jpg'
    },
    {
        key: 'other',
        name: 'Other',
        votes: 12,
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Other.Icon-Only.dark.svg/1024px-Other.Icon-Only.dark.svg.png'
    }
];

export default function(state = initialState, action: {type: any, payload: any}) {
    switch (action.type){
        case DO_VOTE: {
            const { votes } = action.payload;
            return state.map(s => {
                if (votes.indexOf(s.key) > -1) s.votes += 1;
                return s;
            });
        }
        default: 
            return state;
    }
}