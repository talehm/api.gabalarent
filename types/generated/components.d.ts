import type { Schema, Attribute } from '@strapi/strapi';

export interface BedsBeds extends Schema.Component {
  collectionName: 'components_beds_beds';
  info: {
    displayName: 'beds';
    description: '';
  };
  attributes: {
    type: Attribute.Enumeration<['double', 'single']>;
    count: Attribute.Integer;
  };
}

export interface DetailsDetails extends Schema.Component {
  collectionName: 'components_details_details';
  info: {
    displayName: 'details';
    description: '';
  };
  attributes: {
    hasAirConditioner: Attribute.Boolean;
    hasTv: Attribute.Boolean;
    hasPool: Attribute.Boolean;
    hasBisetka: Attribute.Boolean;
    hasBarbecue: Attribute.Boolean;
    hasSamovar: Attribute.Boolean;
  };
}

export interface HovuzHovuz extends Schema.Component {
  collectionName: 'components_hovuz_hovuzs';
  info: {
    displayName: 'hovuz';
    description: '';
  };
  attributes: {
    length: Attribute.Integer;
    width: Attribute.Integer;
  };
}

export interface RoomRoom extends Schema.Component {
  collectionName: 'components_room_rooms';
  info: {
    displayName: 'room';
    description: '';
  };
  attributes: {
    type: Attribute.Enumeration<['yataq otagi', 'qonaq otagi']> &
      Attribute.Required &
      Attribute.DefaultTo<'yataq otagi'>;
    size: Attribute.Integer;
    floor: Attribute.Integer;
    beds: Attribute.Component<'beds.beds', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'beds.beds': BedsBeds;
      'details.details': DetailsDetails;
      'hovuz.hovuz': HovuzHovuz;
      'room.room': RoomRoom;
    }
  }
}
