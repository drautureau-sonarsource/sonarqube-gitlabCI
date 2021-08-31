/*
 * SonarQube
 * Copyright (C) 2009-2021 SonarSource SA
 * mailto:info AT sonarsource DOT com
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */
import { shallow } from 'enzyme';
import * as React from 'react';
import { mockComponent } from '../../../../../helpers/mocks/component';
import { BuildTools, OSs } from '../../../types';
import AnalysisCommand, { AnalysisCommandProps } from '../AnalysisCommand';

jest.mock('../../../../../helpers/urls', () => ({
  getHostUrl: () => 'HOST'
}));

it('renders correctly', () => {
  expect(shallowRender({ languageConfig: { buildTool: BuildTools.Gradle } })).toMatchSnapshot(
    'gradle'
  );
  expect(shallowRender({ languageConfig: { buildTool: BuildTools.Maven } })).toMatchSnapshot(
    'maven'
  );
  expect(shallowRender({ languageConfig: { buildTool: BuildTools.DotNet } })).toMatchSnapshot(
    '.NET'
  );
  expect(
    shallowRender({ languageConfig: { buildTool: BuildTools.CFamily, os: OSs.Linux } })
  ).toMatchSnapshot('CFamily');
  expect(shallowRender({ languageConfig: { buildTool: BuildTools.CFamily } })).toMatchSnapshot(
    'Empty CFamily'
  );
  expect(
    shallowRender({ languageConfig: { buildTool: BuildTools.Other, os: OSs.Windows } })
  ).toMatchSnapshot('other');
});

function shallowRender(props: Partial<AnalysisCommandProps> = {}) {
  return shallow<AnalysisCommandProps>(
    <AnalysisCommand component={mockComponent()} languageConfig={{}} token="myToken" {...props} />
  );
}
