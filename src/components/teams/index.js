/**
 * @author aramsey
 */

import React, { useState } from "react";

import { useQuery } from "react-query";

import ids from "./ids";
import Listing from "./Listing";
import Toolbar from "./Toolbar";
import isQueryLoading from "../utils/isQueryLoading";
import { useUserProfile } from "contexts/userProfile";
import {
    ALL_TEAMS_QUERY,
    getAllTeams,
    getMyTeams,
    MY_TEAMS_QUERY,
    SEARCH_TEAMS_QUERY,
    searchTeams,
} from "serviceFacades/groups";

const TEAM_FILTER = {
    MY_TEAMS: "MY_TEAMS",
    ALL_TEAMS: "ALL_TEAMS",
};

function Teams(props) {
    const [teamFilter, setTeamFilter] = useState(TEAM_FILTER.ALL_TEAMS);
    const [searchTerm, setSearchTerm] = useState("");
    const [data, setData] = useState([]);
    const [userProfile] = useUserProfile();

    const { isFetching: fetchMyTeams } = useQuery({
        queryKey: [MY_TEAMS_QUERY, userProfile?.id],
        queryFn: getMyTeams,
        config: {
            enabled: TEAM_FILTER.MY_TEAMS === teamFilter && !searchTerm,
            onSuccess: (results) => setData(results.groups),
        },
    });

    const { isFetching: fetchAllTeams } = useQuery({
        queryKey: [ALL_TEAMS_QUERY, userProfile?.id],
        queryFn: getAllTeams,
        config: {
            enabled: TEAM_FILTER.ALL_TEAMS === teamFilter && !searchTerm,
            onSuccess: (results) => setData(results.groups),
        },
    });

    const { isFetching: fetchMatchingTeams } = useQuery({
        queryKey: [SEARCH_TEAMS_QUERY, { searchTerm }],
        queryFn: searchTeams,
        config: {
            enabled: searchTerm,
            onSuccess: (results) => setData(results.groups),
        },
    });

    const onTeamNameSelected = () => {
        console.log("Team Name Selected!");
    };

    const loading = isQueryLoading([
        fetchMyTeams,
        fetchAllTeams,
        fetchMatchingTeams,
    ]);

    return (
        <>
            <Toolbar
                parentId={ids.TEAMS.BASE}
                teamFilter={teamFilter}
                setTeamFilter={setTeamFilter}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />
            <Listing
                parentId={ids.TEAMS.BASE}
                loading={loading}
                data={data}
                onTeamNameSelected={onTeamNameSelected}
            />
        </>
    );
}

export default Teams;
export { TEAM_FILTER };
