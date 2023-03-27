import React, {FC} from 'react'
import BigAvatar from "./content/bigavatar/BigAvatar";
import ControlPanel from "./content/controlpanel/ControlPanel";
import Galery from "./content/galery/Galery";

type Props = {
    data: {
        'data': string,
        'username': string
    }
}

const Content: FC<Props> = ({data}) => {
    const contentStyle = {
        display: 'grid',
        gap: 30,

    }

    return (
        <div style={contentStyle}>
            <BigAvatar/>
            <ControlPanel/>
            <Galery/>
        </div>
    )
}

export default Content
