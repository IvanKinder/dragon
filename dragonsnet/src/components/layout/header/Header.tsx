import React, {FC} from 'react'
import CompanyLogo from "./companylogo/CompanyLogo";
import SearchField from "./searchfield/SearchField";
import InfoButton from "./topbuttons/InfoButton";
import Grid2 from "@mui/material/Unstable_Grid2";
import UserButton from "./topbuttons/UserButton";
import LogoutButton from "./topbuttons/LogoutButton";

const Header:FC = () => {
    return (
        <Grid2 container gap={'2.4vw'}>
            <CompanyLogo/>
            <SearchField/>
            <InfoButton/>
            <UserButton/>
            <LogoutButton/>
        </Grid2>
    )
}

export default Header
