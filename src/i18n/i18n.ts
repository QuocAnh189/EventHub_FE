import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import SIGNIN_EN from '@locales/en/auth/signin.json'
import SIGNUP_EN from '@locales/en/auth/signup.json'
import CATEGORY_ANALYSIS_EN from '@locales/en/dashboard/category-analysis.json'
import CUSTOMER_EN from '@locales/en/dashboard/customer.json'
import EVENT_ANALYSIS_EN from '@locales/en/dashboard/event-analysis.json'
import OVERVIEW_DETAIL_EN from '@locales/en/dashboard/overview-detail.json'
import OVERVIEW_EN from '@locales/en/dashboard/overview.json'
import PAYMENT_EN from '@locales/en/dashboard/payment.json'
import TICKET_SALE_EN from '@locales/en/dashboard/ticket-sale.json'
import CREATE_EVENT_EN from '@locales/en/events/create-event.json'
import MY_EVENT_EN from '@locales/en/events/my-event.json'
import MY_TICKET_EN from '@locales/en/events/my-ticket.json'
import TOP_EVENT_EN from '@locales/en/events/top-event.json'
import CALENDAR_EN from '@locales/en/calendar.json'
import HELP_EN from '@locales/en/help.json'
import HOME_EN from '@locales/en/home.json'
import LANDING_EN from '@locales/en/landing.json'
import ORDER_EN from '@locales/en/order.json'
import REPORT_EN from '@locales/en/report.json'
import REVIEW_EN from '@locales/en/review.json'
import PROFILE_EN from '@locales/en/profile.json'

import SIGNIN_VN from '@locales/vn/auth/signin.json'
import SIGNUP_VN from '@locales/vn/auth/signup.json'
import CATEGORY_ANALYSIS_VN from '@locales/vn/dashboard/category-analysis.json'
import CUSTOMER_VN from '@locales/vn/dashboard/customer.json'
import EVENT_ANALYSIS_VN from '@locales/vn/dashboard/event-analysis.json'
import OVERVIEW_DETAIL_VN from '@locales/vn/dashboard/overview-detail.json'
import OVERVIEW_VN from '@locales/vn/dashboard/overview.json'
import PAYMENT_VN from '@locales/vn/dashboard/payment.json'
import TICKET_SALE_VN from '@locales/vn/dashboard/ticket-sale.json'
import CREATE_EVENT_VN from '@locales/vn/events/create-event.json'
import MY_EVENT_VN from '@locales/vn/events/my-event.json'
import MY_TICKET_VN from '@locales/vn/events/my-ticket.json'
import TOP_EVENT_VN from '@locales/vn/events/top-event.json'
import CALENDAR_VN from '@locales/vn/calendar.json'
import HELP_VN from '@locales/vn/help.json'
import HOME_VN from '@locales/vn/home.json'
import LANDING_VN from '@locales/vn/landing.json'
import ORDER_VN from '@locales/vn/order.json'
import REPORT_VN from '@locales/vn/report.json'
import REVIEW_VN from '@locales/vn/review.json'
import PROFILE_VN from '@locales/vn/profile.json'

const resources = {
  en: {
    landing: LANDING_EN,
    signin: SIGNIN_EN,
    signup: SIGNUP_EN,
    category_analysis: CATEGORY_ANALYSIS_EN,
    customer: CUSTOMER_EN,
    event_analysis: EVENT_ANALYSIS_EN,
    overview_detail: OVERVIEW_DETAIL_EN,
    overview: OVERVIEW_EN,
    payment: PAYMENT_EN,
    ticket_sale: TICKET_SALE_EN,
    create_event: CREATE_EVENT_EN,
    my_event: MY_EVENT_EN,
    my_ticket: MY_TICKET_EN,
    top_event: TOP_EVENT_EN,
    calendar: CALENDAR_EN,
    help: HELP_EN,
    home: HOME_EN,
    order: ORDER_EN,
    report: REPORT_EN,
    review: REVIEW_EN,
    profile: PROFILE_EN
  },
  vn: {
    landing: LANDING_VN,
    signin: SIGNIN_VN,
    signup: SIGNUP_VN,
    category_analysis: CATEGORY_ANALYSIS_VN,
    customer: CUSTOMER_VN,
    event_analysis: EVENT_ANALYSIS_VN,
    overview_detail: OVERVIEW_DETAIL_VN,
    overview: OVERVIEW_VN,
    payment: PAYMENT_VN,
    ticket_sale: TICKET_SALE_VN,
    create_event: CREATE_EVENT_VN,
    my_event: MY_EVENT_VN,
    my_ticket: MY_TICKET_VN,
    top_event: TOP_EVENT_VN,
    calendar: CALENDAR_VN,
    help: HELP_VN,
    home: HOME_VN,
    order: ORDER_VN,
    report: REPORT_VN,
    review: REVIEW_VN,
    profile: PROFILE_VN
  }
}

const defaultNS = 'home'

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('language')! || 'en',
  ns: [
    'landing',
    'signin',
    'signup',
    'category_analysis',
    'customer',
    'event_analysis',
    'overview_detail',
    'overview',
    'payment',
    'ticket_sale',
    'create_event',
    'my_event',
    'my_ticket',
    'top_event',
    'my_ticket',
    'top_event',
    'calendar',
    'help',
    'home',
    'order',
    'report',
    'review',
    'profile'
  ],
  fallbackLng: 'en',
  defaultNS,
  interpolation: {
    escapeValue: false
  }
})

i18n.loadNamespaces('profile')
