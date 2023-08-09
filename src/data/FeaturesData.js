import React from 'react';

import { BsFillShieldLockFill } from 'react-icons/bs';
import { BiSupport } from 'react-icons/bi';
import { GrHostMaintenance } from 'react-icons/gr';
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
	{
		name: 'Meilleur sécurité',
		description: 'Nous avons les meilleurs offres de garantie, sentez-vous en sécurité pour chacuns de nos travaux',
		icon: iconStyle(BsFillShieldLockFill),
		imgClass: 'one',
	},
	{
		name: 'Réparation',
		description: "Si vous avez besoin d'un coup de main pour installer des pièces ou vos hottes, nous sommes là pour vous. ",
		icon: iconStyle(GrHostMaintenance),
		imgClass: 'three',
	},
	{
		name: "Service à la clientèle",
		description: 'Notre équipe est disponible pour vos questions et pour céduler un rendez-vous',
		icon: iconStyle(BiSupport),
		imgClass: 'four',
	},
];
