import React, { useEffect, useState } from 'react';
//assets
import { COLORS } from '../../../assets/constants';
//types
import { TrainingInfo } from '../../../assets/types';
//firebase
import { addDoc, collection } from 'firebase/firestore';
import { useAuth } from '../../../auth/UserContext';
import { db } from '../../../auth/firebase';
//compo
import Button from '../../layouts/Button';
import Loader from '../../layouts/Loader';
import { Wrapper } from './Finish.styles';

interface Props {
    trainingInfo: TrainingInfo
}

const Finish = ({ trainingInfo }: Props) => {
    const { user } = useAuth()
    const [isLoading, setIsLoading] = useState(true)
    const collectionUserDBRef = collection(db, 'idUser')

    useEffect(() => {
        const addTraining = async () => {
            console.log(user)
            const collectionRef = collection(db, `users/${user}/trainings`)
            await addDoc(collectionRef, trainingInfo)
            setIsLoading(false)
        }
        addTraining()
    },[])

    const navigateDashboard = () => {

    }

    if(isLoading) return <Loader />

    return (
        <Wrapper>
            <i className="fa-solid fa-check"></i>
            <h2>Entrainement ajouté !</h2>
            <Button 
                onclick={navigateDashboard} 
                txt={"Tableau de bord"}
                colors={{main: COLORS.orange, hover: COLORS.orangeLight, form: COLORS.orangeDark}}
            /> 
        </Wrapper>
    );
};

export default Finish;