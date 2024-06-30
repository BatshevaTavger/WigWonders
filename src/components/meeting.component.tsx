import React, { useContext, useEffect, useState } from 'react';
import { getMeetings } from '../api/meet.api';
// import { Link } from 'react-router-dom';
// import { MeetingContext } from '../context/meet.context'
interface Meeting {
    _id: number;
    userId: number;
    time: string;
    date: string;
    place: string;
    common: string;
}

export const Meeting = () => {
    const [meeting, setMeeting] = useState<Meeting[]>([]);
    const userId = localStorage.getItem('userId') || null;
    // const [selectedMeeting, setSelectedMeeting] = useState<Meeting | null>(null);
    // const meetContext = useContext(MeetingContext)
    const [selectedMeetingId, setSelectedMeetingId] = useState<number | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            if (userId != null) {
                try {
                    const data = await getMeetings(userId);
                    setMeeting(data);
                } catch (error) {
                    console.error('Error fetching services:', error);
                }
            }
        };
        fetchData();
    }, [userId]);


    // function handleMeetingClick(meeting: Meeting): void {
    // }

    // function handleClick(key: any): void {
    //     changeMeetContext(key);
    //     meetContext.meeting?._id
    //     alert(key)
    // }
    // const getSelectedMeeting = () => {
    //     return meeting.find((m) => m._id === selectedMeetingId);
    // };
    // const handleMeetingClick = (meeting: Meeting): void => {
    //     setSelectedMeetingId(meeting._id);
    // };

    return (
        <div>
            <h1>Your Meetings</h1>
            {meeting.length ? (
                <ul>
                    {meeting.map((meet) => (
                        <div key={meet._id}>
                            <strong>Time: </strong>  {meet.time}
                            <strong>Date: </strong>  {meet.date}
                            <strong>Place: </strong>  {meet.place}
                            <strong>Common: </strong>  {meet.common}

                            {/* <button><Link to={'/common'}>לשליחת פרטי פגישה</Link></button>
                            <strong>Common: </strong> */}
                        </div>


                    ))}
                </ul>
            ) : (
                <h2>You don't have any meetings yet.</h2>
            )}
            {/* {selectedMeetingId && (
                <MeetingDetails meeting={meeting.find((m) => m._id === selectedMeetingId)} />
            )} */}
        </div>
    );
};

// קומפוננטת פרטי פגישה
// const MeetingDetails = ({ meetingId }: { meetingId: number }) => {
//     return (
//         <div>
//             <h2>פרטי פגישה</h2>
//             <p>מזהה פגישה: {meetingId}</p>
//         </div>
//     );
// };
// const MeetingDetails = ({ meeting }: { meeting: Meeting | undefined }) => {
//     if (meeting === undefined) {
//         return <div>No meeting found</div>;
//     }

//     return (
//         <div>
//             <label></label>
//             <textarea

//                 placeholder="הזן הערה כאן"

//             />

//         </div>
//     );
// };

export default Meeting;



