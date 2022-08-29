import { ProfileEffect } from './profile/profile.effects';
import { UserAuthEffect } from './auth/user-auth.effects';
import { ConvocationEffect } from './convocation/convocation.effect';
import { DocumentEffect } from './convocation/document.effect';
import { AdminAuthEffect } from './admin/admin-auth.effects';
import { RequirementEffect } from './convocation/requirement.effect';
import { EventTypeEffect } from './convocation/event-type.effect';
export const effectsOF = [
  UserAuthEffect,
  ProfileEffect,
  ConvocationEffect,
  DocumentEffect,
  AdminAuthEffect,
  RequirementEffect,
  EventTypeEffect
]
