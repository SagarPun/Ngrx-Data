import { EntityMetadataMap } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
    Person: {}
};

const pluralNames = { Person: 'person' };

export const entityConfig = {
    entityMetadata,
    pluralNames
}