import { ProfileEffect } from './profile/profile.effects';
import { UserAuthEffect } from './auth/user-auth.effects';
import { ConvocationEffect } from './convocation/convocation.effect';
import { DocumentEffect } from './convocation/document.effect';
import { AdminAuthEffect } from './admin/admin-auth.effects';
export const effectsOF = [
  UserAuthEffect,
  ProfileEffect,
  ConvocationEffect,
  DocumentEffect,
  AdminAuthEffect
]
