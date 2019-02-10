import noblyCardBg from '../images/noblyCard.png';
import noblyWorkBg from '../images/noblyWorkBg.jpg';
import noblyWork01 from '../images/noblyWork01.png';
import noblyWork02 from '../images/noblyWork02.png';
import noblyWork03 from '../images/noblyWork03.png';

import integraCardBg from '../images/integraCard.jpg';
import integraWorkBg from '../images/integraWorkBg.jpg';
import integraWork01 from '../images/integraWork01.jpg';
import integraWork02 from '../images/integraWork02.jpg';
import integraWork03 from '../images/integraWork03.jpg';

import noodleCardBg from '../images/noodleCardBg.jpg';
import noodleWorkBg from '../images/noodleWorkBg.jpg';
import noodleWork01 from '../images/noodleWork01.png';
import noodleWork02 from '../images/noodleWork02.png';
import noodleWork03 from '../images/noodleWork03.png';

import sinergyCardBg from '../images/sinergyCardBg.jpg';
import sinergyWorkBg from '../images/sinergyWorkBg.jpg';
import sinergyWork01 from '../images/sinergyWork01.png';
import sinergyWork02 from '../images/sinergyWork02.png';
import sinergyWork03 from '../images/sinergyWork03.png';
import sinergyWork04 from '../images/sinergyWork04.png';

import novaCardBg from '../images/novaCardBg.png';
import novaWorkBg from '../images/novaWorkBg.png';
import novaWork01 from '../images/novaWork01.png';
import novaWork02 from '../images/novaWork02.png';
import novaWork03 from '../images/novaWork03.png';
import novaWork04 from '../images/novaWork04.png';
import novaWork05 from '../images/novaWork05.png';

import stCardBg from '../images/stCardBg.jpg';
import stWorkBg from '../images/stWorkBg.png';
import stWork01 from '../images/stWork01.png';
import stWork02 from '../images/stWork02.png';

const works = [
  {
    backgroundUrl: noblyCardBg,
    name: 'Nobly',
    desc: 'The #1 customer rated EPOS system on the market',
    workBackground: noblyWorkBg,
    client:
      'Nobly is a point-of-sale, inventory management and CRM app for the iPad and android tablets. It offers an integral solution for coffee shops, restaurants and retail stores.',
    project:
      'A cloud-based backoffice that manages the whole business. The application offers a variety of features, among the most important ones are: payment integration services with Paymentsense, Barclaycard, iZettle, stock and inventory tracking, loyalty and rewards system and the iPad grid configuration.',
    challenge:
      'The biggest challenge I went through at Nobly was to build the iPad grid builder which allows the user to setup the ipad layout for the different products and categories. It was built using the drag and drop native api from html, and using react-virtualized to render the products in the most efficient way possible.',
    tools: ['React', 'Redux', 'styled-components', 'Node', 'Mongo'],
    images: [noblyWork01, noblyWork02, noblyWork03]
  },
  {
    backgroundUrl: integraCardBg,
    name: 'Integra',
    desc: 'All in one solution for contact centers',
    workBackground: integraWorkBg,
    client:
      'Integra provides an all in one solution to contact centers through uContact, their main web based platform.',
    project:
      'uConcact is a a web application that aims to reduce costs and improve the productivity of agents and supervisors within a contact center. Some of the features uContact has to offer are: Dialers (Inbound & Outbound) - SMS, Email & Webchat in a Unified Inbox - A Call Center Designed CRM - Completely Customizable Reporting - Gamification - Recording - Voice Broadcasting - Quality Control - Live Coaching (Spy, Whisper, Collaborate).',
    challenge:
      'I was hired by integra to migrate the entire platform, from java fx, to HTML, CSS and javascript. One of the biggest challenges I had while working at Integra was to program the built in telephone of the application. For that we used javascript in the frontend connected to a java REST API. It was quite the challenge as I had to do a lot of research on topics related to telephony, such as asterisk servers, PBXs, Web RTC etc.',
    tools: ['Javascript', 'jQuery', 'HTML', 'CSS', 'Java', 'MySql'],
    images: [integraWork01, integraWork02, integraWork03]
  },
  {
    backgroundUrl: noodleCardBg,
    name: 'Noodle',
    desc: 'Helping students and families make better education decisions',
    workBackground: noodleWorkBg,
    client:
      'Noodle is a US based company that has an online platform that focuses on offering a trustworthy guidance on education.',
    project:
      'Noodle offers a web based platform that helps people to make decisions regarding their education and career path based on their interests, strengths and needs. It seeks to empower people with the information and tools they need to find that path.',
    challenge:
      'One of the biggest challenges was to establish a clear and transparent communication with the client and to put together all the user stories from the requirements as there were a lot.',
    tools: ['React', 'Redux', 'redux-sagas', 'styled-components', 'Python'],
    images: [noodleWork01, noodleWork02, noodleWork03]
  },
  {
    backgroundUrl: novaCardBg,
    name: 'Nova',
    desc: 'Administrator template',
    workBackground: novaWorkBg,
    client: null,
    project:
      'Nova is an administrator template that I built with the purpose of selling it on www.themeforest.net',
    challenge:
      'The goal of this side project was to learn how to build things from scratch, that is why I did not want to use ui frameworks or pre built libraries. One of the challenges was to learn how to apply different javascript patterns to build the application in a modular fashion. Also I got to learn how to use SASS and BEM together which until this day I think is one of the best ways to write comprehensive and clean styles.',
    tools: ['Javascript', 'jQuery', 'HTML', 'SASS'],
    projectUrl: 'https://mollerjorge.github.io/nova/',
    images: [novaWork01, novaWork02, novaWork03, novaWork04, novaWork05]
  },
  {
    backgroundUrl: sinergyCardBg,
    name: 'Sinergy',
    desc: 'e-commerce solution for small retail stores',
    workBackground: sinergyWorkBg,
    client: 'Sinergy is thought to be used by small to medium sized retail stores in Uruguay.',
    project:
      'Sinergy is an e-commerce platform that allows the user to setup an entire store from scratch with ease. It allows anyone to sell online, issue invoices and import products from other e-commerce platforms such as aliexpress or DHGate. ',
    challenge:
      "One of the challenges was to import products from aliexpress and DHGate. For that I built a web scrapper that retrieves the most relevant information of a product such as images, price, name and description and pulls up that information in the Create Product view, so that the user doesn't have to go through that mannually.",
    tools: ['React', 'Redux', 'styled-components', 'AWS-S3', 'Node', 'Mongo'],
    images: [sinergyWork04, sinergyWork01, sinergyWork02, sinergyWork03]
  },
  {
    backgroundUrl: stCardBg,
    name: 'Technical services',
    desc: 'Service management solution for company: Technical Services',
    workBackground: stWorkBg,
    client:
      "Technical services is a company based in Uruguay that provides it's customers with different technical services.",
    project:
      'The idea behind the project was to build a service management application that helped Technical Services to automate different processes within the company. Broadly speaking it allows the client to log in to the application and fill out a form to request a particular service. An administrator from Technical Services then logs in to the application and performs different actions to that request, such as assign it to an employee, attach images, schedule a day and time for the service to take place etc. The platform also allows to send a digital contract (pdf) to the client to sign it and approve de budget.',
    challenge:
      'It was my first React project, so the main challenge was to put together everything I have learnt throughout the different courses I took of React. One of the challenges was to wire up the application with AWS-S3 to store images.',
    tools: ['React', 'Redux', 'styled-components', 'AWS-S3', 'Node', 'Mongo'],
    images: [stWork01, stWork02]
  }
];

export default works;
